import styled from "styled-components";
import selected from "@images/selected.png";
import unselected from "@images/unselected.png";

export const StyledDiv = styled.div<{ $selected?: boolean }>`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: url(${props => props.$selected ? selected : unselected});
    background-size: cover;
    top: -330px;
    right: 0;
`;
