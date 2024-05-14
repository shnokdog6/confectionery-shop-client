import React from "react";
import { Nav } from "@widgets/nav";
import { Container } from "react-bootstrap";
import { StyledHeader } from "./FixedNavStyles";

export const FixedNav = () => {
    return (
        <StyledHeader>
            <Container className="h-100">
                <Nav />
            </Container>
        </StyledHeader>
    );
};
