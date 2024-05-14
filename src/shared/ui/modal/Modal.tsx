import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { StopPropagation } from "@shared/ui/stop-propagation";
import { StyledWrapper } from "./ModalStyles";

export interface ModalProps extends PropsWithChildren {
    isVisible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ children, isVisible, setVisible }) => {


    function onClick() {
        setVisible(prevState => {
            return !prevState;
        })
    }

    return (isVisible &&
        <StyledWrapper onClick={onClick}>
            <StopPropagation>
                {children}
            </StopPropagation>
        </StyledWrapper>);
};
