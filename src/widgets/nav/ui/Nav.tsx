import React from "react";
import { StyledButtonsFlex, StyledStack } from "./NavStyles";
import { Search } from "@shared/ui/search";
import { OutlineButton } from "@shared/ui/outline-button/OutlineButton";
import { useNavigate } from "react-router-dom";
import { SignIn } from "@features/sign-in";
import { useModal } from "@shared/ui/modal/useModal";
import { SignUp } from "@features/sign-up";

export const Nav = () => {
    const { placeholder: SignInPlaceholder, show: showSignIn } = useModal({ element: <SignIn /> });
    const { placeholder: SignUpPlaceholder, show: showSignUp } = useModal({ element: <SignUp /> });

    return (
        <StyledStack direction="horizontal">
            <StyledButtonsFlex direction="horizontal">
                <OutlineButton onClick={showSignIn}>
                    Войти
                </OutlineButton>
                <OutlineButton onClick={showSignUp}>
                    Зарегистрироваться
                </OutlineButton>
            </StyledButtonsFlex>
            <Search />
            {SignInPlaceholder}
            {SignUpPlaceholder}
        </StyledStack>
    );
};
