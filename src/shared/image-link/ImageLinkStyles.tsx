import styled from "styled-components";
import {ImageLinkProps} from "@shared/image-link/ImageLink";

export const StyledLink = styled.a<ImageLinkProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: url(${props => props.src}) center no-repeat;
    background-size: contain;
`;
