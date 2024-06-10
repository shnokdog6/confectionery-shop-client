import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { baseQuery } from "@shared/api/baseQuery";

export async function baseQueryWithReauth(args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}): Promise<any> {
    const result = await baseQuery(args, api, extraOptions);
    console.log(result.error?.status);

    return result;
}
