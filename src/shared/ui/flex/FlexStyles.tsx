import styled from "styled-components";
import {FlexProps} from "./Flex";

export const StyledDiv = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.vertical ? "column" : "row"};
    gap: ${props => props.gap};
`;