import React, {ButtonHTMLAttributes, FC} from 'react';
import { StyledButton } from './BlackButton.module';

export interface BlackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const BlackButton: FC<BlackButtonProps> = (props) => {
    return (
        <StyledButton {...props}/>
    );
};
