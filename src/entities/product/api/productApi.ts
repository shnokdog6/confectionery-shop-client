import { baseApi, PRODUCT_TAG } from "@shared/api";
import { IProduct } from "@entities/product";
import { ICategory } from "@entities/category";

export interface ProductParams {
    categories?: ICategory[];
}

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<Omit<IProduct, "details">[], ProductParams>({
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
        product: build.query<IProduct, number>({
            query: (id) => ({
                url: `/product/${id}`,
            }),
        }),
    }),
});

export const { useProductsQuery, useProductQuery } = productApi;
