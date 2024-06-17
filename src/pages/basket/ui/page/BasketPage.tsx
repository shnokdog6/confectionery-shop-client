import React from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { FixedNav } from "@widgets/fixed-nav";
import { Footer } from "@shared/ui/footer";
import { ProductList } from "../product-list/ProductList";

export const BasketPage = () => {
    return (
        <PageWrapper>
            <FixedNav />
            <ProductList />
            <Footer />
        </PageWrapper>
    );
};
