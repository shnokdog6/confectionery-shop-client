import { IProduct } from "@entities/product";
import cake from "@images/card.png";
import { FC } from "react";
import {
    StyledButton,
    StyledHeader,
    StyledImg,
    StyledSpan,
    StyledWrapper,
} from "./ProductCardStyles";

export interface ProductCardProps {
    src: IProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ src }) => {
    return (
        <StyledWrapper>
            <StyledImg src={cake} />
            <StyledHeader>{src.name}</StyledHeader>
            <StyledSpan>{src.cost}₽</StyledSpan>
            <StyledButton>В корзину</StyledButton>
        </StyledWrapper>
    );
};
