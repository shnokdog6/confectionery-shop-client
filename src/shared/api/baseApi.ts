import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CATEGORY_TAG, PRODUCT_TAG } from "./tags";

export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: [PRODUCT_TAG, CATEGORY_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: () => ({})
})
