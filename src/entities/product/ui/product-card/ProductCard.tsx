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
import { StopPropagation } from "@shared/ui/stop-propagation";

export interface ProductCardProps {
    src: IProduct;
    onClick?: (productID: number) => void;
    action?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({ src, onClick, action }) => {
    return (
        <StyledWrapper onClick={() => onClick?.(src.id)}>
            <StyledImg src={cake} />
            <StyledHeader>{src.name}</StyledHeader>
            <StyledSpan>{src.cost}₽</StyledSpan>
            <StyledAction>
                <StopPropagation>{action}</StopPropagation>
            </StyledAction>
        </StyledWrapper>
    );
};
