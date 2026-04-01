import {
  getStoryContext,
  waitForPageReady,
} from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";
import * as path from "path";

const config = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);

    const storyDir = path.dirname(storyContext.parameters.fileName);

    const customSnapshotsDir = path.join(
      process.cwd(),
      storyDir,
      "__snapshots__",
      "images"
    );

    await waitForPageReady(page);

    if (!storyContext.parameters?.skipScreenshot) {
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot({
        customSnapshotsDir,
        customSnapshotIdentifier: context.id,
        diffDirection: "vertical",
        failureThreshold: 20.0,
        failureThresholdType: "percent",
      });
    }

    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
  tags: {
    exclude: ["exclude-test"],
  },
};
export default config;
