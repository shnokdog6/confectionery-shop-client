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

export interface IOrderProduct extends Omit<IProduct, "categories"> {
    count: number;
}

export interface IDetailedOrder extends IOrder {
    products: Array<IOrderProduct>;
}
