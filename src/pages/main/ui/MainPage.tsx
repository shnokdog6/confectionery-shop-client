import React from "react";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { AssortmentList } from "@widgets/assortment-list";
import { StyledH1 } from "./MainPage.styles";
import { Container } from "react-bootstrap";

export const MainPage = () => {
    return (
        <PageWrapper>
            <Header>
                <Container className="h-100 position-relative">
                    <StyledH1>Территория вкуса</StyledH1>
                </Container>
            </Header>
            <FixedNav />
            <AssortmentList />
            <Footer />
        </PageWrapper>
    );
};
