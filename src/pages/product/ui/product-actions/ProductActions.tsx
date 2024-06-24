import React, { FC } from "react";
import { FixedWidget } from "@shared/ui/fixed-widget";
import { Container, Spinner, Stack } from "react-bootstrap";
import { Counter } from "@shared/ui/counter";
import {
    StyledAddToBasket,
    StyledSpan,
    StyledWrapper,
} from "./ProductActions.styles";
import { IProduct } from "@entities/product";
import { AddToBasket } from "@features/add-to-basket";

export interface ProductActionsProps {
    product: IProduct;
    pinned?: boolean;
    isLoading?: boolean;
    isError?: boolean;
}

export const ProductActions: FC<ProductActionsProps> = ({
    product,
    pinned,
    isLoading,
    isError,
}) => {
    return (
        <FixedWidget pinned={pinned}>
            <Container className="d-flex justify-content-end py-3">
                <StyledWrapper>
                    {isLoading && <Spinner animation="border" role="status" />}
                    {isError && (
                        <div className="w-auto">Не удалось загрузить товар</div>
                    )}
                    {product && <Counter />}
                </StyledWrapper>
                {product && (
                    <Stack direction="horizontal" gap={1}>
                        <StyledSpan>{product.cost}₽</StyledSpan>
                        <StyledAddToBasket>
                            <AddToBasket product={product} />
                        </StyledAddToBasket>
                    </Stack>
                )}
            </Container>
        </FixedWidget>
    );
};
