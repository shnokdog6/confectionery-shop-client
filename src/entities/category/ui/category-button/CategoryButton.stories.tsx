import type { Meta, StoryObj } from "@storybook/react";
import { CategoryButton } from "@entities/category/ui/category-button/index";

const meta: Meta<typeof CategoryButton> = {
    title: "entities/category/CategoryButton",
    component: CategoryButton,
};

export default meta;

type Story = StoryObj<typeof CategoryButton>;

export const Default: Story = {
    args: {
        children: "click me",
        disabled: false,
    },
    parameters: {
        layout: "centered",
    },
};
