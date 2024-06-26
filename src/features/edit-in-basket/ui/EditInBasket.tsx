import React, { FC, useState } from "react";
import { Stack } from "react-bootstrap";
import { IBasketProduct } from "@entities/basket";
import { useAddMutation, useDeleteMutation } from "../api/EditInBasketApi";
import { StyledButton, StyledSpan } from "./EditInBasket.styles";
import { Counter } from "@shared/ui/counter";

export interface EditInBasketProps {
    product: IBasketProduct;
}

export const EditInBasket: FC<EditInBasketProps> = ({ product }) => {
    const [count, setCount] = useState(product.count);
    const [addToBasketQuery] = useAddMutation();
    const [deleteFromBasketQuery] = useDeleteMutation();

    async function addToBasket() {
        const response = await addToBasketQuery(product);
        if (response.error) return;
        setCount((prev) => prev + 1);
    }

    async function deleteFromBasket() {
        const response = await deleteFromBasketQuery(product);
        if (response.error) return;
        setCount((prev) => prev - 1);
    }

    return <Counter min={1} max={10} value={count} setValue={setCount} />;
};
