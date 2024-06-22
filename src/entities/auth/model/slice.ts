import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, AuthState } from "@entities/auth/model/types";

const initialState: AuthState = {
    accessToken: null,
    roles: [],
    isAuthorized: false
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<AuthResponse>) => {
            state.accessToken = action.payload.accessToken;
            state.roles = action.payload.roles;
            state.isAuthorized = true;
        },
        resetData: (state) => {
            state.accessToken = null;
            state.roles = [];
            state.isAuthorized = false;
        }
    }
});

export const { setData, resetData } = AuthSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
