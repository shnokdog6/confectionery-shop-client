import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@shared/ui/search";
import { OutlineButton } from "@shared/ui/outline-button";
import { SignIn } from "@features/sign-in";
import { useModal } from "@shared/ui/modal";
import { SignUp } from "@features/sign-up";
import { useAppSelector } from "@shared/api";
import { selectIsAuthorized } from "@entities/auth/model/slice";
import { StyledButtonsFlex, StyledStack } from "./NavStyles";


export const Nav = () => {
    const navigate = useNavigate();
    const isAuthorized = useAppSelector(selectIsAuthorized);
    const { placeholder: SignInPlaceholder, show: showSignIn, hide: hideSignIn } = useModal({ element: <SignIn /> });
    const { placeholder: SignUpPlaceholder, show: showSignUp, hide: hideSignUp } = useModal({ element: <SignUp /> });

    useEffect(() => {
        hideSignIn();
        hideSignUp();
    }, [isAuthorized])

    if (!isAuthorized) {
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
    }

    return (
        <StyledStack direction="horizontal">
            <StyledButtonsFlex direction="horizontal">
                <OutlineButton onClick={() => navigate("/")}>
                    Главная
                </OutlineButton>
                <OutlineButton onClick={() => navigate("/basket")}>
                    Корзина
                </OutlineButton>
            </StyledButtonsFlex>
            <Search />
        </StyledStack>
    );
};
