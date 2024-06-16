import { baseApi } from "@shared/api";
import { IProduct } from "@entities/product";

const AddToBasketApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addToBasket: build.mutation<object, IProduct>({
            query: (product) => ({
                url: "basket",
                method: "PATCH",
                body: {
                    products: [{ id: product.id, count: 1 }],
                },
            }),
        }),
    }),
});

export const { useAddToBasketMutation } = AddToBasketApi;
