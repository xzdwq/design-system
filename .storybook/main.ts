import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    'storybook-addon-designs',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        dedupe: ['@storybook/client-api'],
        alias: [
          {
            find: '@',
            replacement: path.resolve(__dirname, '..', 'src'),
          },
        ],
      },
    });
  },
};
export default config;
