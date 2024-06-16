import React, { PropsWithChildren, ReactElement } from "react";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { MainPage } from "@pages/main";
import { BasketPage } from "@pages/basket";
import { useAppSelector } from "@shared/api";
import { selectIsAuthorized } from "@entities/auth/model/slice";

function AuthGuard({ children }: PropsWithChildren) {
    const isAuthorized = useAppSelector(selectIsAuthorized);

    if (!isAuthorized) {
        return <Navigate to="/" />;
    }

    return children;
}

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/basket",
        element: (
            <AuthGuard>
                <BasketPage />
            </AuthGuard>
        ),
    },
]);
