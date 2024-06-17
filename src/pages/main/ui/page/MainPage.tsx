import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { ProductList } from "../product-list/ProductList";
import { StyledH1 } from "./MainPage.styles";

export const MainPage = () => {
    return (
        <PageWrapper>
            <Header>
                <Container className="h-100 position-relative">
                    <StyledH1>Территория вкуса</StyledH1>
                </Container>
            </Header>
            <FixedNav />
            <ProductList />
            <Footer />
        </PageWrapper>
    );
};
