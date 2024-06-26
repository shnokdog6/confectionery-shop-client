import React, { PropsWithChildren, useEffect } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainPage } from "@pages/main";
import { ProductPage } from "@pages/product";
import { BasketPage } from "@pages/basket";
import { useAppSelector } from "@shared/api";
import { selectIsAuthorized } from "@entities/auth/model/slice";
import { OrdersPage } from "@pages/orders/ui/page/OrdersPage";

function AuthGuard({ children }: PropsWithChildren) {
    const isAuthorized = useAppSelector(selectIsAuthorized);

    if (!isAuthorized) {
        return <Navigate to="/" />;
    }

    return children;
}

function ScrollToTop({ children }: PropsWithChildren) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return children;
}

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/product/:productId",
        element: (
            <ScrollToTop>
                <ProductPage />
            </ScrollToTop>
        ),
    },
    {
        path: "/basket",
        element: (
            <AuthGuard>
                <BasketPage />
            </AuthGuard>
        ),
    },
    {
        path: "/orders",
        element: (
            <AuthGuard>
                <OrdersPage />
            </AuthGuard>
        ),
    },
]);
