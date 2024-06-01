import React from "react";
import { StyledDiv, StyledImage, StyledInput } from "./Search.module";
import search from "@images/search.png";

export const Search = () => {
    return (
        <StyledDiv>
            <StyledInput placeholder="Поиск" />
            <StyledImage src={search} />
        </StyledDiv>
    );
};
