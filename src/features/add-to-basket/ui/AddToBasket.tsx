import React, { FC } from "react";
import { BlackButton } from "@shared/ui/black-button";
import { useAddToBasketMutation } from "@features/add-to-basket/api/AddToBasketApi";
import { IProduct } from "@entities/product";

export interface AddToBasketProps {
    product?: Omit<IProduct, "details">;
    onClick?: () => void;
    count?: number;
}

export const AddToBasket: FC<AddToBasketProps> = ({
    product,
    count,
    onClick,
}) => {
    const [addToBasket] = useAddToBasketMutation();

    function handleClick() {
        if (!product) return;
        addToBasket({ productId: product.id, count: count || 1 });
        onClick?.();
    }

    return <BlackButton onClick={handleClick}>В корзину</BlackButton>;
};
