import styled from "styled-components";
import {Stack, StackProps} from "react-bootstrap";

export const StyledButtonsFlex = styled(Stack)<StackProps>`
    gap: 10px;
`;

export const StyledStack = styled(Stack)<StackProps>`
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;