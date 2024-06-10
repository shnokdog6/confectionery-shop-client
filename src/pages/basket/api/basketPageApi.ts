import { baseApi, BASKET_TAG } from "@shared/api";
import { IProduct } from "@entities/product";

export const basketPageApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<IProduct[], void>({
            query: () => ({
                url: "/basket"
            }),
            providesTags: [BASKET_TAG]
        })
    })
});

export const { useProductsQuery } = basketPageApi;
