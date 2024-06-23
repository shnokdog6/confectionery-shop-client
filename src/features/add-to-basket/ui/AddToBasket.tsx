import React, { FC } from "react";
import { BlackButton } from "@shared/ui/black-button";
import { useAddToBasketMutation } from "@features/add-to-basket/api/AddToBasketApi";
import { IProduct } from "@entities/product";

export interface AddToBasketProps {
    product?: Omit<IProduct, "details">;
}

export const AddToBasket: FC<AddToBasketProps> = ({ product }) => {
    const [addToBasket] = useAddToBasketMutation();

    return (
        <BlackButton onClick={() => product && addToBasket(product)}>
            В корзину
        </BlackButton>
    );
};
