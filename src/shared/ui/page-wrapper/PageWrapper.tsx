import React, { FC, PropsWithChildren } from "react";
import { StyledDiv } from "./PageWrapperStyles";

export const PageWrapper: FC<PropsWithChildren> = (props) => {
    return (
        <StyledDiv {...props}/>
    );
};

