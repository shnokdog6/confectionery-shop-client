import React from "react";
import { StyledWrapper } from "./SignUpStyles";
import { BlackButton } from "@shared/ui/black-button";
import { Input } from "@shared/ui/input";

export const SignUp = () => {
    return (
        <StyledWrapper>
            <Input placeholder="Телефон"/>
            <Input placeholder="Пароль"/>
            <Input placeholder="Повторите пароль"/>
            <BlackButton>Зарегистрироваться</BlackButton>
        </StyledWrapper>
    );
};

