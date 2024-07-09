import { IProduct } from "@entities/product";

export interface Types extends IProduct {
    count: number;
}

export interface BasketState {
    orderCost: number;
}
