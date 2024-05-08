import React from 'react';
import {StyledButtonsFlex, StyledStack} from "./NavStyles";
import {Search} from "@shared/search";
import {OutlineButton} from "@shared/outline-button/OutlineButton";
import {useNavigate} from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate();

    return (
        <StyledStack direction="horizontal">
            <StyledButtonsFlex direction="horizontal">
                <OutlineButton onClick={() => navigate("/signin")}>Войти</OutlineButton>
                <OutlineButton>Зарегистрироваться</OutlineButton>
            </StyledButtonsFlex>
            <Search/>
        </StyledStack>
    );
};