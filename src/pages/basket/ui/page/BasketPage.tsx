import React from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { FixedNav } from "@widgets/fixed-nav";
import { Footer } from "@shared/ui/footer";
import { ProductList } from "../product-list/ProductList";
import { ActionBar } from "@pages/basket/ui/action-bar/ActionBar";
import { useInView } from "react-intersection-observer";

export const BasketPage = () => {
    const { ref, inView } = useInView();

    return (
        <PageWrapper>
            <FixedNav />
            <ProductList />
            <ActionBar pinned={!inView} />
            <Footer className="mt-0" ref={ref} />
        </PageWrapper>
    );
};
