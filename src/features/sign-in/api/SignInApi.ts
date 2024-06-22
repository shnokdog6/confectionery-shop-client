import { baseApi } from "@shared/api";
import { AuthResponse, resetData, setData } from "@entities/auth";

export interface SignInBody {
    phoneNumber: string;
    password: string;
}

export const SignInApi = baseApi.injectEndpoints({
    endpoints: build => ({
        signIn: build.mutation<AuthResponse, SignInBody>({
            query: (body) => ({
                method: "POST",
                url: "auth/login",
                body
            }),
            onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setData(data));
                } catch (e) {
                    dispatch(resetData());
                }
            }
        })
    })
});

export const { useSignInMutation } = SignInApi;
