import React, { FC, Fragment, PropsWithChildren } from "react";
import { StyledDiv } from "./FixedWidget.styles";

export interface FixedWidgetProps extends PropsWithChildren {
    pinned?: boolean;
}

export const FixedWidget: FC<FixedWidgetProps> = ({ pinned, children }) => {
    const [placeholderHeight, setPlaceholderHeight] = React.useState(0);

    return (
        <Fragment>
            {pinned && <div style={{ height: placeholderHeight }}></div>}
            <StyledDiv
                ref={(ref) => ref && setPlaceholderHeight(ref.offsetHeight)}
                $pinned={pinned}
            >
                {children}
            </StyledDiv>
        </Fragment>
    );
};
