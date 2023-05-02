import type { Meta, StoryObj } from '@storybook/vue3';

import Colors from './Colors.vue';

const meta = {
  title: 'Palette/Colors',
  component: Colors,
  parameters: {
    docs: {
      controls: { exclude: ['style'] },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gBucUPxFydUk8Bwsv9F8XY/Design-System?node-id=414-4268&t=1KW4icG4npSHNrIj-0',
    },
  },
} satisfies Meta<typeof Colors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {};
