import { baseApi, PRODUCT_TAG } from "@shared/api";
import { IProduct } from "@entities/product";
import { ICategory } from "@entities/category";

export interface ProductParams {
    categories?: ICategory[];
}

export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        products: build.query<IProduct[], ProductParams>({
            query: ({ categories }) => ({
                url: "/product",
                body: {
                    ...(categories && {
                        categories: categories.map((category) => category.id),
                    }),
                },
            }),
            providesTags: [PRODUCT_TAG],
        }),
    }),
});

export const { useProductsQuery } = productApi;
