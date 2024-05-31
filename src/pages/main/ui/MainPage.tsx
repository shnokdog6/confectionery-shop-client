import React from "react";
import { Footer } from "@shared/ui/footer";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { ProductList } from "@widgets/product-list";
import { PageWrapper } from "@shared/ui/page-wrapper";

const Header = React.lazy(async () => {
    const { Header } = await import("@shared/ui/header");
    return { default: Header };
});

export const MainPage = () => {
    return (
        <PageWrapper>
            <Header />
            <FixedNav />
            <ProductList />
            <Footer />
        </PageWrapper>
    );
};
