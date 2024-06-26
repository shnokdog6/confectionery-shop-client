import styled from "styled-components";

export const StyledButton = styled.button<{ $color: string }>`
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: ${(props) => props.$color};
    color: white;
    font-weight: bold;
    text-wrap: nowrap;
`;
