import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    gap: 15px;
`;

export const StyledSpan = styled.span`
    font-weight: 600;
    font-size: 20px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
`;

export const StyledDecrementButton = styled.button`
    border-radius: 10px;
    min-width: 47px;
    min-height: 47px;
    background: #ff3434;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    color: #fff;
`;

export const StyledIncrementButton = styled(StyledDecrementButton)`
    background: #0ed10a;
`;
