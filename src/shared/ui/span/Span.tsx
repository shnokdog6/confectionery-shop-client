import React, { forwardRef, HTMLAttributes } from "react";
import { StyledSpan } from "./Span.styles";

export interface SpanProps extends HTMLAttributes<HTMLSpanElement> {}

export const Span = forwardRef<HTMLSpanElement, SpanProps>((props, ref) => {
    return <StyledSpan {...props} ref={ref}/>
});
