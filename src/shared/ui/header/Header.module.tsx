import styled from "styled-components";
import background from "@images/frame.png";
import { HTMLAttributes } from "react";

export const StyledHeader = styled.header<HTMLAttributes<HTMLElement>>`
    background: url(${background}) fixed;
    width: 100%;
    height: 760px;
    background-size: 100% 100%;

    @media (max-width: 1440px) {
        height: 560px;
    }

    @media (max-width: 991px) {
        height: 330px;
        background-size: 200%;
        background-position-x: 50%;
    }
`;
