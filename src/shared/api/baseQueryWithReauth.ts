import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { baseQuery } from "@shared/api/baseQuery";

export async function baseQueryWithReauth(args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}): Promise<any> {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
        console.log("Unauthorized");
    }

    return result;
}
