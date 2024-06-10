import React from "react";
import { StyledWrapper } from "./SignInStyles";
import { BlackButton } from "@shared/ui/black-button";
import { Input } from "@shared/ui/input";
import { useSignInMutation } from "@features/sign-in/api/SignInApi";

export const SignIn = () => {
    const [phoneNumber, setPhoneNumber] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [signIn] = useSignInMutation();

    return (
        <StyledWrapper>
            <Input
                onChange={e => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                placeholder="Телефон" />
            <Input
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="Пароль" />
            <BlackButton
                onClick={() => signIn({
                    phoneNumber,
                    password
                })}
            >
                Войти
            </BlackButton>
        </StyledWrapper>
    );
};

