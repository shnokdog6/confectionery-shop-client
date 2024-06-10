import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers, { getState }) => {
        const { accessToken } = (getState() as RootState).auth;
        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }
        return headers;
    }
});
