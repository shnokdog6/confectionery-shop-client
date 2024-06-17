import React, { ButtonHTMLAttributes, FC } from "react";
import { StyledButton } from "./CategoryButton.styles";

export interface CategoryButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CategoryButton: FC<CategoryButtonProps> = (props) => {
    return <StyledButton {...props} />;
};
