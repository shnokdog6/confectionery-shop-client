import React, { FC, PropsWithChildren } from "react";
import { StyledDiv } from "./WidgetStyles";

export const Widget: FC<PropsWithChildren> = (props) => {
    return <StyledDiv {...props} />;
};
