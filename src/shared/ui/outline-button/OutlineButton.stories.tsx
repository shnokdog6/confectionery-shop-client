import { Meta, StoryObj } from "@storybook/react";
import { OutlineButton } from "@shared/ui/outline-button";

const meta: Meta<typeof OutlineButton> = {
    title: "shared/ui/OutlineButton",
    component: OutlineButton,
};

export default meta;

type Story = StoryObj<typeof OutlineButton>;
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
