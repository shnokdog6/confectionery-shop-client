import React, { FC, ReactNode } from "react";
import { IProduct } from "@entities/product";
import cake from "@images/card.png";
import {
    StyledAction,
    StyledHeader,
    StyledImg,
    StyledSpan,
    StyledWrapper,
} from "./ProductCard.styles";

export interface ProductCardProps {
    src: IProduct;
    action?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({ src, action }) => {
    return (
        <StyledWrapper>
            <StyledImg src={cake} />
            <StyledHeader>{src.name}</StyledHeader>
            <StyledSpan>{src.cost}₽</StyledSpan>
            <StyledAction>{action}</StyledAction>
        </StyledWrapper>
    );
};
