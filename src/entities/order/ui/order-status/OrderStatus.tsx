import React, { FC, PropsWithChildren } from "react";
import { StyledDiv } from "./OrderStatus.styles";
import { OrderStatusType } from "@entities/order";

interface OrderStatusProps extends PropsWithChildren {
    type: OrderStatusType;
}

const colors = new Map<OrderStatusType, string>([
    [OrderStatusType.IN_PROCESSING, "#FFB800"],
    [OrderStatusType.CONFIRMED, "#0ED10A"],
    [OrderStatusType.COMPLETED, "#000000"],
    [OrderStatusType.CANCELED, "#FF3434"],
]);

export const OrderStatus: FC<OrderStatusProps> = ({ children, type }) => {
    return <StyledDiv $color={colors.get(type)}>{children}</StyledDiv>;
};
