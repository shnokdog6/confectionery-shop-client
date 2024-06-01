import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

export const StyledButton = styled.button<
    ButtonHTMLAttributes<HTMLButtonElement>
>`
    color: white;
    border: 2px solid #fff;
    border-radius: 15px;
    padding: 10px 18px;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 15px;
    text-align: center;

    &:hover {
        color: black;
        background-color: white;
    }
`;
