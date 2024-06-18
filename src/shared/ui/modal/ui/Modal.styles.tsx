import styled, { keyframes } from "styled-components";

export const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.66);
`;

export const StyledBody = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const AppearAnimation = keyframes`
    from {
        top: -50px;
    }
    to {
        top: 0;
    }
`;

export const StyledTransition = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${AppearAnimation} 0.25s linear forwards;
`;
