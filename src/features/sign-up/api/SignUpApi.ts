import { baseApi } from "@shared/api";
import { AuthState, setAccessToken } from "@entities/auth";

export interface SignUpBody {
    phoneNumber: string;
    password: string;
}

const SignUpApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signUp: build.mutation<AuthState, SignUpBody>({
            query: (body) => ({
                url: "/auth/register",
                method: "POST",
                body,
            }),
            onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setAccessToken(data.accessToken));
                } catch (e) {
                    dispatch(setAccessToken(null));
                }
            },
        }),
    }),
});

export const { useSignUpMutation } = SignUpApi;
