import styled from "styled-components";

export const StyledWrapper = styled.div`
    position: relative;
    height: 400px;
    box-shadow: 0 0 2px 0 #000;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 25px;
`;

export const StyledImg = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: -25px;
    max-width: 300px;
    height: 234px;
    margin: auto;
`;

export const StyledHeader = styled.h6`
    position: absolute;
    font-weight: 600;
    font-size: 26px;
    text-align: center;
    color: #000;
    top: 212px;
    left: 0;
    right: 0;
`;

export const StyledSpan = styled.span`
    position: absolute;
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    color: #000;
    top: 274px;
    left: 0;
    right: 0;
`;

export const StyledAction = styled.div`
    width: 228px;
    height: 48px;
    position: absolute;
    top: 333px;
    left: 0;
    right: 0;
    margin: 0 auto;
    
    * {
        width: 100%;
    }
`;
