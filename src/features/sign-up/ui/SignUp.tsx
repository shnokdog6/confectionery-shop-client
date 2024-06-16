import React, { useState } from "react";
import { StyledWrapper } from "./SignUp.styles";
import { BlackButton } from "@shared/ui/black-button";
import { Input } from "@shared/ui/input";
import { useSignUpMutation } from "../api/SignUpApi";

export const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const [signUpQuery] = useSignUpMutation();

    function trySignUp() {

        if (!phoneNumber || !password || !repeatPassword) {
            setError("Заполните все поля");
            return;
        }

        if (password !== repeatPassword) {
            setError("Пароль не равны");
            return;
        }

        setError("");
        signUpQuery({
            phoneNumber,
            password,
        });
    }

    return (
        <StyledWrapper>
            <Input
                value={phoneNumber}
                placeholder="Телефон"
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Input
                value={password}
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                value={repeatPassword}
                placeholder="Повторите пароль"
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {error}
            <BlackButton onClick={trySignUp}>Зарегистрироваться</BlackButton>
        </StyledWrapper>
    );
};
