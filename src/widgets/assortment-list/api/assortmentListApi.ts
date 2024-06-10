import { baseApi, CATEGORY_TAG, PRODUCT_TAG } from "@shared/api";
import { IProduct } from "@entities/product";
import { ICategory } from "@entities/category/model/ICategory";

export interface AssortmentParams {
    categories?: number;
}

export const assortmentListApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<IProduct[], AssortmentParams>({
            query: (options) => ({
                url: "/product",
                params: options,
            }),
            providesTags: [PRODUCT_TAG],
        }),
        category: build.query<ICategory[], void>({
            query: () => ({
                url: "/category",
            }),
            providesTags: [CATEGORY_TAG],
        }),
    }),
});

export const { useProductsQuery, useCategoryQuery } = assortmentListApi;
