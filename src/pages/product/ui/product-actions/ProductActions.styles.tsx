import styled from "styled-components";
import basket from "@images/basket.png";
import { Container } from "react-bootstrap";
import { Span } from "@shared/ui/span";

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: end;
    align-items: center;
    min-height: 74px;
`;

export const StyledWrapper = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    width: fit-content;

    @media (max-width: 992px) {
        position: static;
        margin: auto auto auto 0;
    }
`;

export const StyledSpan = styled(Span)`
    margin-right: 25px;
    
    @media (max-width: 576px) {
        font-size: 20px;
        margin-right: 10px;
    }
`;

export const StyledAddToBasket = styled.div`
    position: relative;

    @media (max-width: 576px) {
        button {
            font-size: 0;
            width: 47px;
            height: 47px;
            padding: 0;
        }

        &::after {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            width: 25px;
            height: 25px;
            background: url(${basket}) no-repeat center center;
            background-size: cover;
        }
    }

`;
