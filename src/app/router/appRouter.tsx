import { createBrowserRouter } from "react-router-dom";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        async lazy() {
            const { MainPage } = await import("@pages/main");
            return { Component: MainPage };
        }
    }
]);
