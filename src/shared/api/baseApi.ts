import { createApi } from "@reduxjs/toolkit/query/react";
import { CATEGORY_TAG, PRODUCT_TAG } from "./tags";
import { baseQueryWithReauth } from "@shared/api/baseQueryWithReauth";

export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: [PRODUCT_TAG, CATEGORY_TAG],
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({})
});
