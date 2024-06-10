import { baseApi } from "@shared/api";
import { AuthState, setAccessToken } from "@entities/auth";

export interface SignInBody {
    phoneNumber: string;
    password: string;
}

export const SignInApi = baseApi.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation<AuthState, SignInBody>({
            query: (body) => ({
                method: "POST",
                url: "auth/login",
                body
            }),
            onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setAccessToken(data.accessToken));
                } catch (e) {
                    dispatch(setAccessToken(null));
                }
            }
        })
    })
});

export const { useSignInMutation } = SignInApi;
