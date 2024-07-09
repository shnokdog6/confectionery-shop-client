import styled from "styled-components";

export const StyledWrapper = styled.div`
    position: relative;
    min-height: 400px;
    box-shadow: 0 0 2px 0 #000;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
    font-weight: 600;
    font-size: 26px;
    text-align: center;
    color: #000;
    margin-top: 209px;
`;

export const StyledAction = styled.div`
    padding: 10px;
    width: 100%;
`;
