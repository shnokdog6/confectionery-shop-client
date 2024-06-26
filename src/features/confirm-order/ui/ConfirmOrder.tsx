import React, { FC } from "react";
import { Button } from "@shared/ui/button";
import { IOrder, OrderStatusType, useUpdateOrderMutation } from "@entities/order";

export interface ConfirmOrderProps {
    order: IOrder;
    onSuccess?: (order: IOrder) => void;
}

export const ConfirmOrder: FC<ConfirmOrderProps> = ({ order, onSuccess }) => {
    const [updateOrder] = useUpdateOrderMutation();

    return (
        <Button
            color="green"
            onClick={() =>
                updateOrder({
                    orderID: order.id,
                    statusID: OrderStatusType.CONFIRMED,
                })
            }
        >
            Подтвердить
        </Button>
    );
};
