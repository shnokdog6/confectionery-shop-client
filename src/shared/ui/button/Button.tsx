import React, {ButtonHTMLAttributes, FC} from 'react';
import {StyledButton} from "./ButtonStyles";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <StyledButton {...props}/>
    );
};
