import React from 'react';
import ProductCard from "@entities/product-card/ui/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

export const ProductList = () => {
    return (
        <Container>
            <Row>
                <Col xl={3} lg={4} md={6}>
                    <ProductCard/>
                </Col>
                <Col xl={3} lg={4} md={6}>
                    <ProductCard/>
                </Col>
                <Col xl={3} lg={4} md={6}>
                    <ProductCard/>
                </Col>
                <Col xl={3} lg={4} md={6}>
                    <ProductCard/>
                </Col>
            </Row>
        </Container>
    );
};