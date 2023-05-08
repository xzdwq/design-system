import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import("vue").DefineComponent<{}, {}, any>;
    render: () => {
        components: {
            MyPage: import("vue").DefineComponent<{}, {}, any>;
        };
        template: string;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
