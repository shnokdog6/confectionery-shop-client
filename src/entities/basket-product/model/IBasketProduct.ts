import { IProduct } from "@entities/product";

export interface IBasketProduct extends IProduct {
    count: number;
}
