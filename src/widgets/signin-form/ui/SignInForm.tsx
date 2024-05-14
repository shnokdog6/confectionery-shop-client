import React from "react";
import styled from "styled-components";
import { Button } from "@shared/ui/button";
import { OutlineButton } from "@shared/ui/outline-button/OutlineButton";


export const StyledWrapper = styled.div`
    padding: 20px;
    box-shadow: 0 0 2px 0 #000;
    border-radius: 20px;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    background-color: white;
`;

export const StyledInput = styled.input`
    padding: 10px 150px 10px 10px;
    border: none;
    box-shadow: 0 0 2px 0 #000;
    border-radius: 10px;
    outline: none;
    font-weight: bold;

    &::placeholder {
        color: #d0d0d0;
    }
`;

export const StyledButton = styled.button`
    padding: 10px 40px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 #000;

    outline: none;
    background: black;
    color: white;
    font-weight: bold;

`;

export const SignInForm = () => {
    return (
        <StyledWrapper>
            <StyledInput placeholder="Телефон"/>
            <StyledInput placeholder="Пароль"/>
            <StyledButton>Войти</StyledButton>
        </StyledWrapper>
    );
};

