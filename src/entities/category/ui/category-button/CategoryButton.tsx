import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./CategoryButton.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const CategoryButton: FC<ButtonProps> = (props) => {
    return <StyledButton {...props} />;
};
