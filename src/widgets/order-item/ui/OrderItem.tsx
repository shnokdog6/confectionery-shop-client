import React, { FC, Fragment } from "react";
import {
    StyledButtonLayout,
    StyledContentWrapper,
    StyledDetails,
    StyledSeparator,
    StyledSpan,
} from "./OrderItem.styles";
import { OrderStatus } from "@entities/order/ui/order-status/OrderStatus";
import { Spinner, Stack } from "react-bootstrap";
import { IOrder, OrderStatusType } from "@entities/order";
import { useLazyOrderQuery } from "@entities/order/api/orderApi";
import { CancelOrder } from "@features/cancel-order";
import { ConfirmOrder } from "@features/confirm-order";

export interface OrderItemProps {
    order: IOrder;
}

function formatDate(date: Date) {
    return date.toLocaleString(navigator.language, {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
}

export const OrderItem: FC<OrderItemProps> = ({ order }) => {
    const [fetchFullData, { data, isLoading, isError }] = useLazyOrderQuery();

    function loadFullData() {
        if (data) return;
        fetchFullData(order.id);
    }

    return (
        <StyledDetails onClick={loadFullData}>
            <summary>
                <StyledSpan>
                    Заказ № {order.id} от{" "}
                    {formatDate(new Date(order.createdAt))}
                </StyledSpan>
                <OrderStatus type={order.status.id}>
                    {order.status.name}
                </OrderStatus>
            </summary>
            <StyledContentWrapper>
                <StyledSeparator />
                {isLoading && <Spinner animation="border" role="status" />}
                {isError && (
                    <div className="w-auto">Не удалось загрузить товар</div>
                )}
                <div>
                    {data &&
                        data.products.map((product) => (
                            <Stack
                                direction="horizontal"
                                className="w-100 justify-content-between"
                                key={`${order.id}-${product.id}`}
                            >
                                <span>{product.name}</span>
                                <span>{product.count}</span>
                            </Stack>
                        ))}
                </div>
                <StyledSeparator />
                <div>
                    <Stack
                        direction="horizontal"
                        className="w-100 justify-content-between"
                    >
                        <span>Сумма:</span>
                        <span>{order.sum}₽</span>
                    </Stack>
                </div>
                <StyledButtonLayout>
                    {order.status.id === OrderStatusType.IN_PROCESSING && (
                        <Fragment>
                            <CancelOrder order={order} />
                            <ConfirmOrder order={order} />
                        </Fragment>
                    )}
                </StyledButtonLayout>
            </StyledContentWrapper>
        </StyledDetails>
    );
};
