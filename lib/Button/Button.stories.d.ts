import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import("vue").DefineComponent<{}, {}, any>;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        backgroundColor: {
            control: string;
        };
        onClick: {
            action: string;
        };
    };
    args: {
        primary: boolean;
    };
    parameters: {
        design: {
            type: string;
            url: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
