import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

export interface ModalProps extends PropsWithChildren {
    isVisible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ children, isVisible, setVisible }) => {
    return (
        <BootstrapModal
            show={isVisible}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => setVisible(false)}
        >
            <BootstrapModal.Body>
                {children}
            </BootstrapModal.Body>
        </BootstrapModal>);
};
