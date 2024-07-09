import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";

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
