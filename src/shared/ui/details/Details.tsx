import React, { FC, PropsWithChildren } from "react";
import { StyledDetails } from "./Details.styles";

export interface DetailsProps extends PropsWithChildren {
    summary: string;
}

export const Details: FC<DetailsProps> = ({ summary, children }) => {
    return (
        <StyledDetails>
            <summary>{summary}</summary>
            <div>{children}</div>
        </StyledDetails>
    );
};
