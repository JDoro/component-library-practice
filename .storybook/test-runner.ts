import {
  getStoryContext,
  waitForPageReady,
} from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";
import * as path from "path";

// const testRunnerConfig = getTestRunnerConfig();

const config = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    // Inject Axe utilities in the page before the story renders
    await injectAxe(page);

    console.log("cmdArgs", process.argv);
  },
  async postVisit(page, context) {
    console.log(context);

    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    console.log("storyTags", storyContext.tags);
    // console.log("configTags", testRunnerConfig?.tags);

    // Get the directory of the current story file
    const storyDir = path.dirname(storyContext.parameters.fileName);

    // Define the custom snapshots directory
    const customSnapshotsDir = path.join(
      process.cwd(),
      storyDir,
      "__snapshots__",
      "images"
    );

    // use the test-runner utility to wait for fonts to load, etc.
    await waitForPageReady(page);

    // If you want to take screenshot of multiple browsers, use
    // page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
      diffDirection: "vertical",
    });

    // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
    const elementHandler = await page.$("#storybook-root");
    const innerHTML = await elementHandler?.innerHTML();
    expect(innerHTML).toMatchSnapshot();

    // Do not test a11y for stories that disable a11y
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // in Storybook 6.x, the selector is #root
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      // pass axe options defined in @storybook/addon-a11y
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
  tags: {
    exclude: ["exclude-test"],
  },
};
export default config;
