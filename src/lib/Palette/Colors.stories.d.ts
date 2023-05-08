import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import("vue").DefineComponent<{}, {}, any>;
    parameters: {
        docs: {
            controls: {
                exclude: string[];
            };
        };
        design: {
            type: string;
            url: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Palette: Story;
