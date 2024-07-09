import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState } from "./types";

const initialState: BasketState = {
    orderCost: 0,
};

export const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setOrderCost: (state, action: PayloadAction<number>) => {
            state.orderCost = action.payload;
        },
    },
});

export const { setOrderCost } = BasketSlice.actions;

export const selectOrderCost = (state: RootState) => state.basket.orderCost;
