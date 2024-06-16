import React, { FC, memo, ReactNode } from "react";
import { ProductCard } from "@entities/product";
import { Col, Row } from "react-bootstrap";
import { IProduct } from "@entities/product/model/IProduct";

export interface ProductListProps {
    items: IProduct[];
    action?: (props: { product: IProduct }) => ReactNode;
}

export const ProductList: FC<ProductListProps> = memo(
    ({ items, action }) => {
        return (
            <Row className="d-flex justify-content-start align-items-center">
                {items.map((item) => (
                    <Col key={`${item.id}.${item.name}`} xl={3} lg={4} md={6}>
                        <ProductCard
                            src={item}
                        />
                    </Col>
                ))}
            </Row>
        );
    },
);
