import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./CategoryButton.module";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const CategoryButton: FC<ButtonProps> = (props) => {
    return <StyledButton {...props} />;
};
