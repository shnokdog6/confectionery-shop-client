import React, { FC } from "react";
import { StyledLink } from "./ImageLink.module";

export interface ImageLinkProps extends React.AnchorHTMLAttributes<HTMLLinkElement> {
    width: number;
    height: number;
    src: string;
}

export const ImageLink: FC<ImageLinkProps> = (props) => {
    return <StyledLink {...props} />;
};
