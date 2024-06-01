import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@shared/ui/header/Header";

const meta: Meta<typeof Header> = {
    title: "shared/ui/Header",
    component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {

};
