import React, { FC, memo } from "react";
import { IProduct, ProductCard } from "@entities/product";
import { Col } from "react-bootstrap";
import { StyledRow } from "./ProductListStyles";

export interface ProductListProps {
    items: IProduct[];
}

export const ProductList: FC<ProductListProps> = memo(({ items }) => {
    return (
        <StyledRow>
            {items.map((item) => (
                <Col key={item.name} xl={3} lg={4} md={6}>
                    <ProductCard
                        key={`${item.id}.${item.name}`}
                        src={item}
                    />
                </Col>
            ))}
        </StyledRow>
    );
});
