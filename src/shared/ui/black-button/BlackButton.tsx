import React, {ButtonHTMLAttributes, FC} from 'react';
import { StyledButton } from './BlackButtonStyles';

export const BlackButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <StyledButton {...props}/>
    );
};
