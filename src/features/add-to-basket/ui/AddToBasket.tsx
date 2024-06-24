import React, { FC } from "react";
import { BlackButton } from "@shared/ui/black-button";
import { useAddToBasketMutation } from "@features/add-to-basket/api/AddToBasketApi";
import { IProduct } from "@entities/product";

export interface AddToBasketProps {
    product?: Omit<IProduct, "details">;
    count?: number;
}

export const AddToBasket: FC<AddToBasketProps> = ({ product, count }) => {
    const [addToBasket] = useAddToBasketMutation();

    return (
        <BlackButton
            onClick={() =>
                product &&
                addToBasket({ productId: product.id, count: count || 1 })
            }
        >
            В корзину
        </BlackButton>
    );
};
