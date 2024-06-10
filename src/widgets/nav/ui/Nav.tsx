import React, { useEffect } from "react";
import { StyledButtonsFlex, StyledStack } from "./NavStyles";
import { Search } from "@shared/ui/search";
import { OutlineButton } from "@shared/ui/outline-button/OutlineButton";
import { SignIn } from "@features/sign-in";
import { useModal } from "@shared/ui/modal/useModal";
import { SignUp } from "@features/sign-up";
import { useAppSelector } from "@shared/api";
import { selectIsAuthorized } from "@entities/auth/model/slice";

export const Nav = () => {
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
                <OutlineButton>
                    Корзина
                </OutlineButton>
            </StyledButtonsFlex>
            <Search />
        </StyledStack>
    );
};
