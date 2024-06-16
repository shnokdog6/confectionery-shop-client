import React, { FC, HTMLAttributes } from "react";
import { StyledHeader } from "./Header.styles";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export const Header: FC<HeaderProps> = (props) => {
    return <StyledHeader {...props} />;
};
