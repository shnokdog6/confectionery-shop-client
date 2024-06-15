import React, { FC, memo } from "react";
import { ProductCard } from "@entities/product";
import { Col, Row } from "react-bootstrap";
import { IProduct } from "@entities/product/model/IProduct";

export interface ProductListProps {
    items: IProduct[];
}

export const ProductList: FC<ProductListProps> = memo(({ items }) => {
    return (
        <Row className="d-flex justify-content-center align-items-center">
            {items.map((item) => (
                <Col key={`${item.id}.${item.name}`} xl={3} lg={4} md={6}>
                    <ProductCard src={item} />
                </Col>
            ))}
        </Row>
    );
});
