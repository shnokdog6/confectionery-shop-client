import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@shared/ui/button";

const meta: Meta<typeof Button> = {
    title: "shared/ui/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "click me",
        disabled: false,
    },
    parameters: {
        layout: "centered",
    },
};
