import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledContainer = styled(Container)`
    margin-top: 25px;
    margin-bottom: 25px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledDiv = styled.div`
    box-shadow: 0 0 2px 0 #000;
    border-radius: 10px;
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const StyledH1 = styled.h1`
    font-size: 48px;
    font-weight: 600;
`;
