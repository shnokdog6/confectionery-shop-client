import React, { Fragment, useEffect } from "react";
import { StyledButtonsFlex, StyledStack } from "./NavStyles";
import { Search } from "@shared/ui/search";
import { OutlineButton } from "@shared/ui/outline-button/OutlineButton";
import { SignIn } from "@features/sign-in";
import { useModal } from "@shared/ui/modal/useModal";
import { SignUp } from "@features/sign-up";
import { useAppSelector } from "@shared/api";
import { selectIsAuthorized } from "@entities/auth/model/slice";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
    const navigate = useNavigate();
    const isAuthorized = useAppSelector(selectIsAuthorized);
    const { placeholder: SignInPlaceholder, show: showSignIn, hide: hideSignIn } = useModal({ element: <SignIn /> });
    const { placeholder: SignUpPlaceholder, show: showSignUp, hide: hideSignUp } = useModal({ element: <SignUp /> });

    useEffect(() => {
        hideSignIn();
        hideSignUp();
    }, [isAuthorized]);

    return (
        <StyledStack direction="horizontal">
            <StyledButtonsFlex direction="horizontal">
                {isAuthorized ?
                    <Fragment>
                        <OutlineButton onClick={() => navigate("/basket")}>
                            Корзина
                        </OutlineButton>
                    </Fragment>
                    :
                    <Fragment>
                        <OutlineButton onClick={showSignIn}>
                            Войти
                        </OutlineButton>
                        <OutlineButton onClick={showSignUp}>
                            Зарегистрироваться
                        </OutlineButton>
                    </Fragment>
                }
            </StyledButtonsFlex>
            <Search />
            {isAuthorized || SignInPlaceholder}
            {isAuthorized || SignUpPlaceholder}
        </StyledStack>
    );
};
