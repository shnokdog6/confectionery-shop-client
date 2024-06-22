import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { baseQuery } from "@shared/api/baseQuery";
import { setData, resetData, AuthResponse } from "@entities/auth";

export async function baseQueryWithReauth(
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {},
): Promise<any> {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const { data } = await baseQuery("/auth/update", api, extraOptions);
        if (data) {
            api.dispatch(setData(data as AuthResponse));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(resetData());
        }
    }

    return result;
}
