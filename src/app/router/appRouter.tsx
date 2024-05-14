import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@pages/main";
import { SignInPage } from "@pages/signin";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/signin",
        element: <SignInPage />
    }
]);
