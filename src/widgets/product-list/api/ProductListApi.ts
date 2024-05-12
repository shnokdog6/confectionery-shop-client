import { baseApi, PRODUCT_TAG } from "@shared/api";
import { IProduct } from "@entities/product-card";

export interface ProductParams {
    category?: number;
}

export const productListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<IProduct[], ProductParams>({
            query: (options) => ({
                url: "/product",
                params: options
            }),
            providesTags: [PRODUCT_TAG]
        })
    })
})

export const { useProductsQuery } = productListApi;
