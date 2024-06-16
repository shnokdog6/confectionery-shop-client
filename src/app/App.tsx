import React, { Fragment, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { baseQueryWithReauth } from "@shared/api/baseQueryWithReauth";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body, html, #root {
        height: 100vh;
    }

`;

const App = () => {
    return (
        <Fragment>
            <GlobalStyles />
            <RouterProvider router={AppRouter} />
        </Fragment>
    );
};

export default App;
