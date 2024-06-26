import styled from "styled-components";

export const StyledDiv = styled.div<{ $color: string }>`
    border-radius: 10px;
    background-color: ${(props) => props.$color};
    width: 81px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100%;
    font-weight: 600;
    font-size: 10px;
    color: #fff;
`;
