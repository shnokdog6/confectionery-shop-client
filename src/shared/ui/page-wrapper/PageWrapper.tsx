import React, { FC, PropsWithChildren } from "react";
import { StyledDiv } from "./PageWrapper.module";

export const PageWrapper: FC<PropsWithChildren> = (props) => {
    return (
        <StyledDiv {...props}/>
    );
};

