import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { StyledButton } from "./BlackButton.styles";

export interface BlackButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const BlackButton = forwardRef<HTMLButtonElement, BlackButtonProps>(
    (props, ref) => {
        return <StyledButton {...props} ref={ref} />;
    },
);
