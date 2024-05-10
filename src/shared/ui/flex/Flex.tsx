import React, {FC, PropsWithChildren} from 'react';
import {StyledDiv} from "./FlexStyles";

export interface FlexProps extends PropsWithChildren {
    vertical?: boolean;
    gap?: string;
}

export const Flex: FC<FlexProps> = (props) => {
    return (
        <StyledDiv {...props}/>
    );
};
