import { baseApi, PRODUCT_TAG } from "@shared/api";
import { IProduct } from "@entities/product";

export interface ProductParams {
    category?: number;
}

export const assortmentListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<IProduct[], void>({
            query: (options) => ({
                url: "/product",
            }),
            providesTags: [PRODUCT_TAG],
        }),
    }),
});

export const { useProductsQuery } = assortmentListApi;
