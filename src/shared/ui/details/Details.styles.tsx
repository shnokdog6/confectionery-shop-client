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
        align-items: center;
        margin-left: 25px;
        position: relative;
    }
    
    summary::before {
        position: absolute;
        left: -35px;
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
    
    div {
        padding-top: 15px;
        font-size: 12px;
        text-align: justify;
        font-weight: 500;
    }
`;
