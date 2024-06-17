import { baseApi } from "@shared/api";
import { IBasketProduct } from "../models/IBasketProduct";

const BasketPageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        basket: build.mutation<IBasketProduct[], void>({
            query: () => ({
                url: "/basket",
            }),
        }),
    }),
});

export const { useBasketMutation } = BasketPageApi;
