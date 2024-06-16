import React, { useEffect } from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { FixedNav } from "@widgets/fixed-nav";
import { Footer } from "@shared/ui/footer";
import { useBasketMutation } from "../api/BasketPageApi";
import { ProductCard } from "@entities/product";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { EditInBasket } from "@features/edit-in-basket/ui/EditInBasket";
import { StyledRow } from "./BasketPage.styles";

export const BasketPage = () => {
    const [fetchData, { data, isLoading }] = useBasketMutation();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <PageWrapper>
            <FixedNav />
            <Container className="mt-5 mb-4">
                <StyledRow>
                    {isLoading && <Spinner animation="border" role="status" />}
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
                                        action={<EditInBasket product={item} />}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )}
                </StyledRow>
            </Container>
            <Footer />
        </PageWrapper>
    );
};
