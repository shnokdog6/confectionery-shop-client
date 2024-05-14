import React, { FC, PropsWithChildren } from "react";
import { StyledLink } from "./LinkStyles";

export const Link: FC<PropsWithChildren> = ({ children }) => {
    return <StyledLink>{children}</StyledLink>;
};
