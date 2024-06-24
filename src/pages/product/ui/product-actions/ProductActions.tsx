import React, { FC, useRef, useState } from "react";
import { FixedWidget } from "@shared/ui/fixed-widget";
import { Spinner, Stack } from "react-bootstrap";
import { Counter } from "@shared/ui/counter";
import {
    StyledAddToBasket,
    StyledContainer,
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
    const [count, setCount] = useState(1);

    return (
        <FixedWidget pinned={pinned}>
            <StyledContainer>
                <StyledWrapper>
                    {isLoading && <Spinner animation="border" role="status" />}
                    {isError && (
                        <div className="w-auto">Не удалось загрузить товар</div>
                    )}
                    {product && (
                        <Counter
                            min={1}
                            max={10}
                            value={count}
                            setValue={setCount}
                        />
                    )}
                </StyledWrapper>
                {product && (
                    <Stack direction="horizontal" gap={1}>
                        <StyledSpan>{product.cost}₽</StyledSpan>
                        <StyledAddToBasket>
                            <AddToBasket
                                product={product}
                                count={count}
                                onClick={() => setCount(1)}
                            />
                        </StyledAddToBasket>
                    </Stack>
                )}
            </StyledContainer>
        </FixedWidget>
    );
};
