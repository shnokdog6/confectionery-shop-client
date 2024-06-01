import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@shared/ui/footer/Footer";

const meta: Meta<typeof Footer> = {
    title: "shared/ui/Footer",
    component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
};
