import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.module";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = (props) => {
    return <StyledInput {...props} />;
};
