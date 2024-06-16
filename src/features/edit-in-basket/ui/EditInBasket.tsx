import React, { FC, useState } from "react";
import { Stack } from "react-bootstrap";
import { IBasketProduct } from "@entities/basket-product";
import styled from "styled-components";
import {
    useAddMutation,
    useDeleteMutation,
} from "@features/edit-in-basket/api/EditInBasketApi";

export interface EditInBasketProps {
    product: IBasketProduct;
}

export const StyledSpan = styled.span`
    font-size: 22px;
    text-align: center;
`;

export const StyledButton = styled.button`
    padding: 8px 16px;
    border-radius: 10px;
    background: transparent;
    font-size: 20px;
    outline: none;
    border: none;
    box-shadow: 0 0 2px 0 #000;
    min-width: 45px;
`;

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

    return (
        <Stack
            direction="horizontal"
            className="justify-content-center"
            gap={3}
        >
            <StyledButton onClick={addToBasket}>+</StyledButton>
            <StyledSpan>{count}</StyledSpan>
            <StyledButton onClick={deleteFromBasket}>-</StyledButton>
        </Stack>
    );
};
