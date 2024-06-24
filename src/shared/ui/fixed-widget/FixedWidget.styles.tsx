import styled from "styled-components";

export const StyledDiv = styled.div<{ $pinned?: boolean }>`
    position: ${(props) => (props.$pinned ? "fixed" : "static")};
    bottom: 0;
    width: 100%;
    background: white;
    box-shadow: 0 0 2px 0 #000;
`;
