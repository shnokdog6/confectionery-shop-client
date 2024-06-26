import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { StyledButton } from "./Button.styles";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: "black" | "red" | "green";
}

const colors = new Map<string, string>([
    ["black", "#000000"],
    ["red", "#FF3434"],
    ["green", "#0ED10A"]

]);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ color, ...props }, ref) => {
    return (
        <StyledButton {...props} $color={colors.get(color)} ref={ref} />
    );
});
