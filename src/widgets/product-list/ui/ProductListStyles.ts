import styled from "styled-components";
import {Row, RowProps, Spinner} from "react-bootstrap";


export const StyledRow = styled(Row)<RowProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
`;

export const StyledSpinner = styled(Spinner)`

`;
