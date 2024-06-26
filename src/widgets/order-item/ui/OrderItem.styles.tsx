import styled from "styled-components";
import arrow from "@images/arrow.png";

export const StyledDetails = styled.details`
    border-radius: 10px;
    box-shadow: 0 0 2px 0 #000;
    padding: 15px 25px;

    summary {
        font-size: 14px;
        font-weight: 600;
        list-style: none;
        display: flex;
        gap: 25px;
        align-items: center;
        margin-left: 25px;
        position: relative;
    }

    summary::before {
        position: absolute;
        right: 0;
        content: "";
        display: inline-block;
        width: 37px;
        height: 37px;
        background: url(${arrow});
        background-size: contain;
        transform: rotate(90deg);
    }

    &[open] > summary::before {
        transform: rotate(-90deg);
    }
`;

export const StyledSpan = styled.span`
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000;
`;

export const StyledSeparator = styled.div`
    border: 1px solid #acacac;
    width: 100%;
    height: 1px;
    margin: 16px 0;
`;

export const StyledContentWrapper = styled.div`
    margin-right: 10px;
    margin-left: 25px;
`;

export const StyledButtonLayout = styled.div`
    display: flex;
    justify-content: end;
    gap: 15px;
    margin-top: 16px;
`;
