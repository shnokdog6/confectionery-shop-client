import { Meta, StoryObj } from "@storybook/react";
import { Search } from "@shared/ui/search/Search";

const meta: Meta<typeof Search> = {
    title: "shared/ui/Search",
    component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;
export const Default: Story = {
    args: {
        children: "click me",
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
        }
    },
};
