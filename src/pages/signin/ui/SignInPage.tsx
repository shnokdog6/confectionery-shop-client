import React from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { Footer } from "@shared/ui/footer";
import { FixedNav } from "@widgets/fixed-nav";
import { SignIn } from "@entities/sign-in";

export const SignInPage = () => {
    return (
        <PageWrapper>
            <SignIn/>
        </PageWrapper>
    );
};
