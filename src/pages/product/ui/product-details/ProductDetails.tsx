import React, { FC } from "react";
import { Col, Row, Spinner, Stack } from "react-bootstrap";
import { Details } from "@shared/ui/details";
import cake from "@images/card.png";
import {
    StyledContainer,
    StyledDiv,
    StyledH1,
    StyledImage,
} from "./ProductDetails.styles";
import { IProduct } from "@entities/product";

export interface ProductDetailsProps {
    product: IProduct;
    isLoading?: boolean;
    isError?: boolean;
}

export const ProductDetails: FC<ProductDetailsProps> = ({
    product,
    isError,
    isLoading,
}) => {
    return (
        <StyledContainer>
            {isLoading && <Spinner animation="border" role="status" />}
            {isError && (
                <div className="w-auto">Не удалось загрузить товар</div>
            )}
            {product && (
                <Row>
                    <Col xl={4} lg={4} md={6}>
                        <StyledDiv>
                            <StyledImage src={cake} alt="product" />
                        </StyledDiv>
                    </Col>
                    <Col>
                        <Stack direction="vertical" gap={3}>
                            <StyledH1>{product.name}</StyledH1>
                            <Details summary="Описание">
                                {product.details.description}
                            </Details>
                            <Details summary="Состав">
                                {product.details.compound}
                            </Details>
                        </Stack>
                    </Col>
                </Row>
            )}
        </StyledContainer>
    );
};
