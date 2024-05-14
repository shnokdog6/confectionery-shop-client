import React, { FC, LinkHTMLAttributes } from "react";
import { StyledLink } from "./ImageLinkStyles";

export interface ImageLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    width: number;
    height: number;
    src: string;
}
export const ImageLink: FC<ImageLinkProps> = (props) => {
    return <StyledLink {...props} />;
};
