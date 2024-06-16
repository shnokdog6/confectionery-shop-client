import { baseApi } from "@shared/api";
import { IProduct } from "@entities/product";

const EditInBasketApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        add: build.mutation<void, IProduct>({
            query: (product) => ({
                url: "/basket",
                method: "PATCH",
                body: {
                    products: [{ id: product.id, count: 1 }],
                },
            }),
        }),
        delete: build.mutation<void, IProduct>({
            query: (product) => ({
                url: "/basket",
                method: "DELETE",
                body: {
                    products: [{ id: product.id, count: 1 }],
                },
            }),
        }),
    }),
});

export const { useAddMutation, useDeleteMutation } = EditInBasketApi;
