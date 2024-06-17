import { baseApi, CATEGORY_TAG } from "@shared/api";
import { ICategory } from "@entities/category/model/ICategory";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        category: build.query<ICategory[], void>({
            query: () => ({
                url: "/category",
            }),
            providesTags: [CATEGORY_TAG],
        }),
    }),
});

export const { useCategoryQuery } = categoryApi;
