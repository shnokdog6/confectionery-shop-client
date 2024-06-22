import { baseApi } from "@shared/api";
import { AuthResponse, setData, resetData } from "@entities/auth";

export interface SignUpBody {
    phoneNumber: string;
    password: string;
}

const SignUpApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        signUp: build.mutation<AuthResponse, SignUpBody>({
            query: (body) => ({
                url: "/auth/register",
                method: "POST",
                body,
            }),
            onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setData(data));
                } catch (e) {
                    dispatch(resetData());
                }
            },
        }),
    }),
});

export const { useSignUpMutation } = SignUpApi;
