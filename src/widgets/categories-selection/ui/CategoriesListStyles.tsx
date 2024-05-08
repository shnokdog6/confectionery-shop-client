import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import {Stack, StackProps} from "react-bootstrap";

export const StyledWrapper = styled(ScrollContainer)`
    margin: 30px 0;
    min-height: 50px;
    position: relative;
`;

export const StyledStack = styled(Stack)<StackProps>`
    position: absolute;
    gap: 18px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 800px;
    justify-content: center;
`;