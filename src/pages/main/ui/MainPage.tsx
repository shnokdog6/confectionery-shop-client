import React from "react";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { AssortmentList } from "@widgets/assortment-list";

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
