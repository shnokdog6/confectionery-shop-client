import React, { forwardRef, useEffect, useState } from "react";
import {
    StyledDiv,
    StyledDecrementButton,
    StyledIncrementButton,
    StyledSpan,
} from "./Counter.styles";

export const Counter = forwardRef<HTMLDivElement>((_, ref) => {
    const [counter, setCounter] = useState(0);

    return (
        <StyledDiv ref={ref}>
            <StyledDecrementButton
                onClick={() => setCounter((prev) => (prev < 1 ? 0 : prev - 1))}
            >
                -
            </StyledDecrementButton>
            <StyledSpan>{counter}</StyledSpan>
            <StyledIncrementButton
                onClick={() => setCounter((prev) => prev + 1)}
            >
                +
            </StyledIncrementButton>
        </StyledDiv>
    );
});
