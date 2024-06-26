import React, { FC } from "react";
import { Button } from "@shared/ui/button";
import {
    IOrder,
    OrderStatusType,
    useUpdateOrderMutation,
} from "@entities/order";

export interface CancelOrderProps {
    order: IOrder;
    onSuccess?: (order: IOrder) => void;
}

export const CancelOrder: FC<CancelOrderProps> = ({ order, onSuccess }) => {
    const [updateOrder] = useUpdateOrderMutation();

    return (
        <Button
            color="red"
            onClick={() =>
                updateOrder({
                    orderID: order.id,
                    statusID: OrderStatusType.CANCELED,
                })
            }
        >
            Отмена
        </Button>
    );
};
