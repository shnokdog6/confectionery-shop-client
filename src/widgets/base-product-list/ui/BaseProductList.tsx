import React, { FC, ReactNode } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { IProduct, ProductCard } from "@entities/product";
import { StyledRow } from "./BaseProductList.styles";

export interface BaseProductListProps {
    items: Array<Omit<IProduct, "details">>;
    isLoading?: boolean;
    isError?: boolean;
    productCardAction: (product: Omit<IProduct, "details">) => ReactNode;
}

export const BaseProductList: FC<BaseProductListProps> = ({
    items,
    isLoading,
    isError,
    productCardAction,
}) => {
    return (
        <Container>
            <StyledRow>
                {isLoading && <Spinner animation="border" role="status" />}

                {isError && (
                    <div className="w-auto">Не удалось загрузить товар</div>
                )}

                {items && (
                    <Row className="d-flex justify-content-start align-items-center">
                        {items.map((item) => (
                            <Col
                                key={`${item.id}.${item.name}`}
                                xl={3}
                                lg={4}
                                md={6}
                            >
                                <ProductCard
                                    src={item}
                                    action={productCardAction(item)}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </StyledRow>
        </Container>
    );
};
