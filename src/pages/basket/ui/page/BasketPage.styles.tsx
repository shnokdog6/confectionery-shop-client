import styled from "styled-components";
import { Row, RowProps } from "react-bootstrap";

export const StyledRow = styled(Row)<RowProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
`;
