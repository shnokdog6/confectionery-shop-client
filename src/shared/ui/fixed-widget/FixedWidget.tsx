import React, { FC, forwardRef, HTMLProps, PropsWithChildren } from "react";
import { StyledDiv } from "./FixedWidget.styles";

export interface FixedWidgetProps
    extends PropsWithChildren,
        HTMLProps<HTMLDivElement> {
    pinned?: boolean;
}

export const FixedWidget: FC<FixedWidgetProps> = forwardRef<
    HTMLDivElement,
    FixedWidgetProps
>(({ pinned, children, ...props }, ref) => {
    const [placeholderHeight, setPlaceholderHeight] = React.useState(0);

    return (
        <div {...props} ref={ref}>
            {pinned && <div style={{ height: placeholderHeight }}></div>}
            <StyledDiv
                ref={(ref) => ref && setPlaceholderHeight(ref.offsetHeight)}
                $pinned={pinned}
            >
                {children}
            </StyledDiv>
        </div>
    );
});
