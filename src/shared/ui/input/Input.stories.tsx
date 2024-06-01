import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@shared/ui/input";

const meta: Meta<typeof Input> = {
    title: "shared/ui/Input",
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = {
    args: {
        placeholder: "placeholder",
    },
    parameters: {
        layout: "centered",
    }
};
