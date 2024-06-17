import styled from "styled-components";

export const StyledH1 = styled.h1`
    width: fit-content;
    height: fit-content;
    font-family: "Poiret One", sans-serif;
    text-align: center;
    text-wrap: nowrap;
    font-weight: 400;
    font-size: 64px;
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 12px;

    @media (max-width: 991px) {
        font-size: 42px;
        padding: 0;
        right: 0;
        top: -50px;
    }
`;
