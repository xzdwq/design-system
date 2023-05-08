import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createRouter, createWebHistory } from 'vue-router';

import { createI18n } from 'vue-i18n';
import { register } from '../src/lib/main';

import './style.scss';

setup((app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: 'Home',
        path: '/:_(.+)+',
        component: { template: '<div>Home</div>' },
      } as any,
    ],
  });

  const i18n = createI18n({
    locale: 'en-US',
    legacy: false,
    messages: {
      'en-US': {
        edit: 'Edit',
        copy_to: 'Copy to...',
        delete: 'Delete',
        duplicate: 'Duplicate',
      },
    },
  });

  app.use(router);
  app.use(i18n);
  register(app);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
