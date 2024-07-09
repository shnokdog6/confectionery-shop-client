import { baseApi, BASKET_TAG } from "@shared/api";
import { Types } from "@entities/basket/model/types";

interface AddToBasketBody {
    product: Pick<Types, "id" | "count">;
}

interface DeleteFromBasketBody {
    product: Pick<Types, "id">;
}

interface PatchBasketBody {
    product: Pick<Types, "id" | "count">;
}

const basketApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        basket: build.query<Types[], void>({
            query: () => ({
                url: "/basket",
            }),
            providesTags: [BASKET_TAG],
        }),
        patchBasket: build.mutation<Types, PatchBasketBody>({
            query: (body) => ({
                url: "/basket",
                method: "PATCH",
                body: {
                    product: { id: body.product.id, count: body.product.count },
                },
            }),
            invalidatesTags: () => [{ type: BASKET_TAG }],
        }),
        addToBasket: build.mutation<void, AddToBasketBody>({
            query: (body) => ({
                url: "basket",
                method: "POST",
                body: {
                    product: { id: body.product.id, count: body.product.count },
                },
            }),
            invalidatesTags: () => [{ type: BASKET_TAG }],
        }),
        deleteFromBasket: build.mutation<void, DeleteFromBasketBody>({
            query: (body) => ({
                url: "/basket",
                method: "DELETE",
                body: {
                    product: { id: body.product.id },
                },
            }),
            invalidatesTags: () => [{ type: BASKET_TAG }],
        }),
    }),
});

export const {
    useBasketQuery,
    useAddToBasketMutation,
    usePatchBasketMutation,
    useDeleteFromBasketMutation,
} = basketApi;
