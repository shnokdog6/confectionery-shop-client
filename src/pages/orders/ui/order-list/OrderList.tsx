import React from "react";
import { useOrdersQuery } from "@entities/order";
import { BaseOrderList } from "@widgets/base-order-list";

export const OrderList = () => {
    const { data, isLoading, isError } = useOrdersQuery();

    return (
        <BaseOrderList items={data} isLoading={isLoading} isError={isError} />
    );
};
