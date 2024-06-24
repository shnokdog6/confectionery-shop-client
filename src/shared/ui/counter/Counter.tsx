import React, { Dispatch, forwardRef, useEffect, useState } from "react";
import {
    StyledDecrementButton,
    StyledDiv,
    StyledIncrementButton,
    StyledSpan,
} from "./Counter.styles";

export interface CounterProps {
    min?: number;
    max?: number;
    value: number;
    setValue: Dispatch<React.SetStateAction<number>>;
}

export const Counter = forwardRef<HTMLDivElement, CounterProps>(
    ({ min = 0, max = 99, value, setValue }, ref) => {

        return (
            <StyledDiv ref={ref}>
                <StyledDecrementButton
                    onClick={() =>
                        setValue((prev) => (prev === min ? min : prev - 1))
                    }
                >
                    -
                </StyledDecrementButton>
                <StyledSpan>{value}</StyledSpan>
                <StyledIncrementButton
                    onClick={() =>
                        setValue((prev) => (prev === max ? max : prev + 1))
                    }
                >
                    +
                </StyledIncrementButton>
            </StyledDiv>
        );
    },
);
