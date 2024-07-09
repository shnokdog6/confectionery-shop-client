import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, AuthState } from "./types";
import { RoleType } from "@entities/role";

const initialState: AuthState = {
    accessToken: null,
    isAdmin: false,
    isAuthorized: false,
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<AuthResponse>) => {
            state.accessToken = action.payload.accessToken;
            state.isAdmin = action.payload.roles.includes(RoleType.ADMIN);
            state.isAuthorized = true;
        },
        resetData: (state) => {
            state.accessToken = null;
            state.isAdmin = false;
            state.isAuthorized = false;
        },
    },
});

export const { setData, resetData } = AuthSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectIsAdmin = (state: RootState) => state.auth.isAdmin;
