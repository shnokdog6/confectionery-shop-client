import React, { FC, ReactNode } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { IProduct, ProductCard } from "@entities/product";
import { StyledRow } from "./BaseProductList.styles";
import { BaseContainer } from "@shared/ui/base-container";

export interface BaseProductListProps {
    items: Array<IProduct>;
    isLoading?: boolean;
    isError?: boolean;
    onCardClick?: (productID: number) => void;
    productCardAction: (product: IProduct) => ReactNode;
}

export const BaseProductList: FC<BaseProductListProps> = ({
    items,
    isLoading,
    isError,
    onCardClick,
    productCardAction,
}) => {
    return (
        <BaseContainer>
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
                                    onClick={onCardClick}
                                    action={productCardAction(item)}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </StyledRow>
        </BaseContainer>
    );
};
