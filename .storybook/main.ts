import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            providerImportSource: '@storybook/addon-docs/mdx-react-shim',
          },
        },
      },
    },
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  viteFinal: async (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        chunkSizeWarningLimit: 2000,
      },
    };
  },
};
export default config;
