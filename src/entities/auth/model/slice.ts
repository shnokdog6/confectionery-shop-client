import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@entities/auth/model/types";

const initialState: AuthState = {
    accessToken: null,
    isAuthorized: false
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            state.isAuthorized = !!action.payload;
        }
    }
});

export const { setAccessToken } = AuthSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
