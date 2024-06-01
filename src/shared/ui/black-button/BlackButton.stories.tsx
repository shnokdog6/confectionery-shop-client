import type { Meta, StoryObj } from "@storybook/react";
import { BlackButton } from "@shared/ui/black-button/BlackButton";

const meta: Meta<typeof BlackButton> = {
    title: "shared/ui/BlackButton",
    component: BlackButton,
};

export default meta;

type Story = StoryObj<typeof BlackButton>;

export const Default: Story = {
    args: {
        children: "click me",
    },
    parameters: {
        layout: "centered",
    },
};
