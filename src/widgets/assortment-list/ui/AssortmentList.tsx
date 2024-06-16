import React, { memo, useState } from "react";
import { ProductCard, ProductList } from "@entities/product";
import { useProductsQuery } from "../api/AssortmentListApi";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { StyledRow } from "./AssortmentList.styles";
import { ICategory } from "@entities/category/model/ICategory";
import { CategorySelection } from "@widgets/category-selection";
import { AddToBasket } from "@features/add-to-basket/ui/AddToBasket";

export const AssortmentList = memo(() => {
    const [category, setCategory] = useState<ICategory>(null);
    const { data, isLoading, isError, error } = useProductsQuery();

    return (
        <Container>
            <CategorySelection onSelected={setCategory} />
            <StyledRow>
                {isLoading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}

                {isError && (
                    <div className="w-auto">
                        {JSON.stringify(error)} - Не удалось загрузить товар
                    </div>
                )}

                {data && (
                    <Row className="d-flex justify-content-start align-items-center">
                        {data.map((item) => (
                            <Col
                                key={`${item.id}.${item.name}`}
                                xl={3}
                                lg={4}
                                md={6}
                            >
                                <ProductCard
                                    src={item}
                                    action={<AddToBasket product={item} />}
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </StyledRow>
        </Container>
    );
});
