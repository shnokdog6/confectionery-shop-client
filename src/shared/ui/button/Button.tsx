import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./ButtonStyles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: FC<ButtonProps> = (props) => {
    return <StyledButton {...props} />;
};
