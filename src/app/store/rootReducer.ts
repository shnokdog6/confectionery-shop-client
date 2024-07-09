import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api/baseApi";
import { AuthSlice } from "@entities/auth";
import { BasketSlice } from "@entities/basket";

export const rootReducer = combineReducers({
    [AuthSlice.name]: AuthSlice.reducer,
    [BasketSlice.name]: BasketSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
});
