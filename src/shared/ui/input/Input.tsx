import React, { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./InputStyles";


export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <StyledInput {...props} />
    );
};
