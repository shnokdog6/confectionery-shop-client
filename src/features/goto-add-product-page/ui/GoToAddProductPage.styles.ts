import styled from "styled-components";
import cross from "@images/cross.png";

export const StyledDiv = styled.div`
    min-height: 400px;
    box-shadow: 0 0 2px 0 #000;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
    position: relative;

    &:after {
        display: block;
        content: "";
        width: 125px;
        height: 125px;
        background: url(${cross});
        background-size: contain;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`;
