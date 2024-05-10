import React, {FC, HTMLAttributes} from 'react';
import {StyledHeader} from "./HeaderStyles"

export const Header: FC<HTMLAttributes<HTMLElement>> = (props) => {
    return (
        <StyledHeader {...props}/>
    );
};