import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./OutlineButton.module";

export interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const OutlineButton: FC<OutlineButtonProps> = (
    props,
) => {
    return <StyledButton {...props} />;
};
