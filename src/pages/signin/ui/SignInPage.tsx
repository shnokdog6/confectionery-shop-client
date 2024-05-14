import React from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { Footer } from "@shared/ui/footer";
import { FixedNav } from "@widgets/fixed-nav";
import { SignInForm } from "@widgets/signin-form";

export const SignInPage = () => {
    return (
        <PageWrapper>
            <SignInForm/>
        </PageWrapper>
    );
};
