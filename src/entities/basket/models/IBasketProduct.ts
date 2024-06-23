import { IProduct } from "@entities/product";

export interface IBasketProduct extends Omit<IProduct, "details"> {
    count: number;
}
