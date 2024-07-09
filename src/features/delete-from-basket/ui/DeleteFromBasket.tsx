import React, { FC } from "react";
import { Button } from "@shared/ui/button";
import { useDeleteFromBasketMutation } from "@entities/basket";
import { IProduct } from "@entities/product";

export interface DeleteFromBasketProps {
    product: IProduct;
}

export const DeleteFromBasket: FC<DeleteFromBasketProps> = ({ product }) => {
    const [deleteFromBasketQuery] = useDeleteFromBasketMutation();

    return (
        <Button
            color="red"
            onClick={() =>
                deleteFromBasketQuery({ product })
            }
        >
            Удалить
        </Button>
    );
};
