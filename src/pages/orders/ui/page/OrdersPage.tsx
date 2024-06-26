import React from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { FixedNav } from "@widgets/fixed-nav";
import { Footer } from "@shared/ui/footer";
import { OrderList } from "../order-list/OrderList";

export const OrdersPage = () => {
    return (
        <PageWrapper>
            <FixedNav />
            <OrderList/>
            <Footer />
        </PageWrapper>
    );
};
