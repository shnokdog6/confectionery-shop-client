import styled from "styled-components";
import { HTMLAttributes } from "react";
import header from "@images/header.png"

export const StyledHeader = styled.header<HTMLAttributes<HTMLElement>>`
    background: black url(${header}) no-repeat fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;

    @media (max-width: 991px) {
        height: 300px;
        background-position-x: 100%;
    }
`;
