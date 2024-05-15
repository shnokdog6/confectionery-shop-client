import React from "react";
import { StyledWrapper, StyledInput, StyledButton } from "./SignInStyles";

export const SignIn = () => {
    return (
        <StyledWrapper>
            <StyledInput placeholder="Телефон"/>
            <StyledInput placeholder="Пароль"/>
            <StyledButton>Войти</StyledButton>
        </StyledWrapper>
    );
};

