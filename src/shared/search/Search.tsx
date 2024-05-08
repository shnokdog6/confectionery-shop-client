import React from 'react';
import {StyledDiv, StyledImage, StyledInput} from "./SearchStyles";
import search from "@images/search.png"

export const Search = () => {
    return (
        <StyledDiv>
            <StyledInput placeholder="Поиск"/>
            <StyledImage src={search}/>
        </StyledDiv>
    );
};
