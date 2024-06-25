import { IProduct } from "@entities/product";

export enum OrderStatus {
    IN_PROCESSING = 1,
    CONFIRMED,
    COMPLETED,
    CANCELED,
}

export interface IOrder {
    id: number;
    sum: number;
    status: {
        id: OrderStatus;
        name: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

type OrderProduct = Omit<IProduct, "details" | "categories"> & {
    count: number;
};

export interface IDetailedOrder extends IOrder {
    products: Array<OrderProduct>;
}
