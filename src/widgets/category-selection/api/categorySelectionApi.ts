import { ICategory } from "@entities/category/model/ICategory";
import { CATEGORY_TAG, baseApi } from "@shared/api";

export const categorySelectionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        category: build.query<ICategory[], void>({
            query: () => ({
                url: "/category",
            }),
            providesTags: [CATEGORY_TAG],
        }),
    }),
});

export const { useCategoryQuery } = categorySelectionApi;
