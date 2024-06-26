import { baseApi } from "@shared/api";
import { IDetailedOrder, IOrder, OrderStatusType } from "@entities/order";

const orderApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        orders: build.query<IOrder[], void>({
            query: () => ({
                url: "/order",
            }),
        }),
        order: build.query<IDetailedOrder, number>({
            query: (id: number) => ({
                url: `/order/${id}`,
            }),
        }),
        updateOrder: build.mutation<
            IOrder,
            { orderID: number; statusID: OrderStatusType }
        >({
            query: (body) => ({
                url: "/order",
                method: "PATCH",
                body,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const { data: updatedOrder } = await queryFulfilled;
                const patchResult = dispatch(
                    orderApi.util.updateQueryData(
                        "orders",
                        undefined,
                        (draft) => {
                            draft.forEach((order, index) => {
                                if (order.id !== updatedOrder.id) return;
                                draft[index] = updatedOrder;
                            });
                        },
                    ),
                );
                queryFulfilled.catch(patchResult.undo)
            },
        }),
    }),
});

export const { useOrdersQuery, useLazyOrderQuery, useUpdateOrderMutation } =
    orderApi;
