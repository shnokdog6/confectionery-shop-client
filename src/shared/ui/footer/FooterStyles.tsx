import styled from "styled-components";
import { HtmlHTMLAttributes } from "react";
import { Container } from "react-bootstrap";

export const StyledFooter = styled.footer<HtmlHTMLAttributes<HTMLElement>>`
    width: 100%;
    min-height: 87px;
    background-color: black;
    display: flex;
    align-items: center;
    margin-top: auto;
`;

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledDiv = styled.div`
    width: 125px;
    height: 28px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #8191a6;
    line-height: 100%;
`;
