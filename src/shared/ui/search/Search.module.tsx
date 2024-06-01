import styled from "styled-components";

export const StyledInput = styled.input`
    color: white;
    border: 2px solid #fff;
    border-radius: 15px;
    width: 100%;
    box-shadow: 0 0 2px 0 #000;
    background: transparent;
    outline: none;
    padding: 10px 44px;

    &::placeholder {
        color: white;
    }

    @media (max-width: 991px) {
        width: 50px;
        padding: 10px;

        &::placeholder {
            color: transparent;
        }
    }
`;

export const StyledImage = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 15px;

    @media (max-width: 991px) {
        right: 0;
        margin: auto;
    }
`;

export const StyledDiv = styled.div`
    position: relative;
`;
