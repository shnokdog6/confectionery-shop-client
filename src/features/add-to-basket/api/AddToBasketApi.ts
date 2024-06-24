import { baseApi } from "@shared/api";

interface AddToBasketApiBody {
    productId: number;
    count: number;
}

const AddToBasketApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addToBasket: build.mutation<object, AddToBasketApiBody>({
            query: (body) => ({
                url: "basket",
                method: "POST",
                body
            }),
        }),
    }),
});

export const { useAddToBasketMutation } = AddToBasketApi;
