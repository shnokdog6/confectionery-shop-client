import React, {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    useEffect,
} from "react";
import disableScroll from "disable-scroll";
import { StopPropagation } from "@shared/ui/stop-propagation";
import { StyledBody, StyledTransition, StyledWrapper } from "./Modal.styles";

export interface ModalProps extends PropsWithChildren {
    isVisible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ children, isVisible, setVisible }) => {
    function onClick() {
        setVisible((prevState) => {
            return !prevState;
        });
    }

    useEffect(() => {
        isVisible ? disableScroll.on() : disableScroll.off();
    }, [isVisible]);

    return (
        isVisible && (
            <StyledWrapper onClick={onClick}>
                <StyledBody>
                    <StyledTransition>
                        <StopPropagation>{children}</StopPropagation>
                    </StyledTransition>
                </StyledBody>
            </StyledWrapper>
        )
    );
};
