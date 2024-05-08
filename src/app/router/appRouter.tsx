import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "@pages/main";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/signin",
        element: <div>Hello world</div>
    }
])