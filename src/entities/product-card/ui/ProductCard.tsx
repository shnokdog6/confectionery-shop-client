import React from 'react';
import cake from "@images/card.png"
import {StyledWrapper, StyledImg, StyledHeader, StyledSpan, StyledButton} from "./ProductCardStyles";

const ProductCard = () => {
    return (
        <StyledWrapper>
            <StyledImg src={cake}/>
            <StyledHeader>Вишнёвый пирог</StyledHeader>
            <StyledSpan>2000₽</StyledSpan>
            <StyledButton>В корзину</StyledButton>
        </StyledWrapper>
    );
};

export default ProductCard;