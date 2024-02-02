import {getStoryContext, TestRunnerConfig, waitForPageReady} from '@storybook/test-runner';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import {checkA11y, configureAxe, injectAxe} from 'axe-playwright';

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config: TestRunnerConfig = {
  setup() {
    expect.extend({toMatchImageSnapshot});
  },
  async preVisit(page) {
    // Inject Axe utilities in the page before the story renders
    await injectAxe(page);
  },
  async postVisit(page, context) {

    // use the test-runner utility to wait for fonts to load, etc.
    await waitForPageReady(page);

    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
      diffDirection: 'vertical',
    });


    // Get entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Do not test a11y for stories that disable a11y
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // in Storybook 6.x, the selector is #root
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      // pass axe options defined in @storybook/addon-a11y
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};
export default config;
