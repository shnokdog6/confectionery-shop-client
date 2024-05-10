import React, {ButtonHTMLAttributes, FC} from 'react';
import { StyledButton } from './OutlineButtonStyles';

export const OutlineButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <StyledButton {...props}/>
    );
};