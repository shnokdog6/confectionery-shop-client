import React, { forwardRef, useEffect, useState } from "react";
import {
    StyledDecrementButton,
    StyledDiv,
    StyledIncrementButton,
    StyledSpan,
} from "./Counter.styles";

export interface CounterProps {
    onValueChanged?: (value: number) => void;
}

export const Counter = forwardRef<HTMLDivElement, CounterProps>(
    ({ onValueChanged }, ref) => {
        const [counter, setCounter] = useState(0);

        useEffect(() => {
            onValueChanged?.(counter);
        }, [counter]);

        return (
            <StyledDiv ref={ref}>
                <StyledDecrementButton
                    onClick={() =>
                        setCounter((prev) => (prev < 1 ? 0 : prev - 1))
                    }
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
    },
);
