import React from "react";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { AssortmentList } from "@widgets/assortment-list";
import { PageWrapper } from "@shared/ui/page-wrapper";

export const MainPage = () => {
    return (
        <PageWrapper>
            <Header />
            <FixedNav />
            <AssortmentList />
            <Footer />
        </PageWrapper>
    );
};
