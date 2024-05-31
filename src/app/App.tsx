import React from "react";
import { createGlobalStyle } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { appStore } from "./store";
import { Provider } from "react-redux";

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
        <Provider store={appStore}>
            <GlobalStyles />
            <RouterProvider router={AppRouter} />
        </Provider>
    );
};

export default App;
