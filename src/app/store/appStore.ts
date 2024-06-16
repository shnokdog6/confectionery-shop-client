import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { baseApi } from "@shared/api/baseApi";
import { AuthSlice } from "@entities/auth";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    REGISTER,
    PURGE,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [AuthSlice.name],
};

export const appStore = configureStore({
    reducer: persistReducer(persistConfig, rootReducer) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseApi.middleware),
});

export const persistedStore = persistStore(appStore);
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
