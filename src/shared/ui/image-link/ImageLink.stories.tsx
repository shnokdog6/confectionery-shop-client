import { Meta, StoryObj } from "@storybook/react";
import { ImageLink } from "@shared/ui/image-link";
import vk from "@images/vk.png";

const meta: Meta<typeof ImageLink> = {
    title: "shared/ui/ImageLink",
    component: ImageLink,
};

export default meta;

type Story = StoryObj<typeof ImageLink>;

export const Default: Story = {
    args: {
        width: 90,
        height: 105,
        src: vk,
        href: "https://vk.com/",
        target: "_blank",
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
        },
    },
};
