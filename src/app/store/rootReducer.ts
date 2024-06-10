import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/baseApi";
import { AuthSlice } from "@entities/auth";

export const rootReducer = combineReducers({
    [AuthSlice.name]: AuthSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
