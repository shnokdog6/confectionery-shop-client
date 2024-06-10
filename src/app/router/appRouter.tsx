import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@pages/main";
import { BasketPage } from "@pages/basket";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/basket",
        element: <BasketPage />,

    }
]);
