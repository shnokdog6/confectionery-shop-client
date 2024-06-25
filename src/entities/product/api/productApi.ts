import { baseApi, PRODUCT_TAG } from "@shared/api";
import { IDetailedProduct, IProduct } from "@entities/product";
import { ICategory } from "@entities/category";

export interface ProductParams {
    categories?: ICategory[];
}

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<IProduct[], ProductParams>({
            query: ({ categories }) => ({
                url: "/product",
                params: {
                    ...(categories && {
                        categories: categories.map((category) => category.id),
                    }),
                },
            }),
            providesTags: [PRODUCT_TAG],
        }),
        product: build.query<IDetailedProduct, number>({
            query: (id) => ({
                url: `/product/${id}`,
            }),
        }),
    }),
});

export const { useProductsQuery, useProductQuery } = productApi;
