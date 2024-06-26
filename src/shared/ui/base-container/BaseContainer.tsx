import React, { forwardRef } from "react";
import { ContainerProps } from "react-bootstrap";
import { StyledContainer } from "./BaseContainer.styles";

export const BaseContainer = forwardRef<HTMLDivElement, ContainerProps>(
    (props, ref) => {
        return <StyledContainer {...props} ref={ref} />;
    },
);
