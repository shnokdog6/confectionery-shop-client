import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { appStore, persistedStore } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={appStore}>
            <PersistGate persistor={persistedStore} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
serviceWorkerRegistration.register();
