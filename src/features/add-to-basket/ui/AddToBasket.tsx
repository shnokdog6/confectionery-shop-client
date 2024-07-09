import React, { FC } from "react";
import { BlackButton } from "@shared/ui/black-button";
import { IProduct } from "@entities/product";
import { useAddToBasketMutation } from "@entities/basket";
import { Button } from "@shared/ui/button";

export interface AddToBasketProps {
    product?: IProduct;
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
        addToBasket({ product: { ...product, count } });
        onClick?.();
    }

    return (
        <Button color="black" onClick={handleClick}>
            В корзину
        </Button>
    );
};
