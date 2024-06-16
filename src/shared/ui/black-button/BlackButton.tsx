import React, {ButtonHTMLAttributes, FC} from 'react';
import { StyledButton } from './BlackButton.styles';

export interface BlackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const BlackButton: FC<BlackButtonProps> = (props) => {
    return (
        <StyledButton {...props}/>
    );
};
