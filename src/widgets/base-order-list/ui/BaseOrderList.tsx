import React, { FC } from "react";
import { BaseContainer } from "@shared/ui/base-container";
import { Spinner, Stack } from "react-bootstrap";
import { IOrder } from "@entities/order";
import { OrderItem } from "@widgets/order-item";

export interface BaseOrderListProps {
    items: Array<IOrder>;
    isLoading?: boolean;
    isError?: boolean;
}

export const BaseOrderList: FC<BaseOrderListProps> = ({
    items,
    isLoading,
    isError,
}) => {
    return (
        <BaseContainer>
            <Stack direction="vertical" className="w-100 align-items-center">
                {isLoading && <Spinner animation="border" role="status" />}

                {isError && (
                    <div className="w-auto">Не удалось загрузить товар</div>
                )}
            </Stack>
            <Stack direction="vertical" gap={3}>
                {items &&
                    items.map((item) => (
                        <OrderItem
                            order={item}
                            key={`${item.id}-${item.createdAt}`}
                        />
                    ))}
            </Stack>
        </BaseContainer>
    );
};
