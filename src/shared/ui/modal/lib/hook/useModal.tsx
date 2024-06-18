import React, { ReactElement, ReactNode, useState } from "react";
import { Modal } from "@shared/ui/modal/ui/Modal";

export type ModalHookResponse = [
    ReactElement,
    () => void,
    () => void,
] & {
    placeholder: ReactElement;
    show: () => void;
    hide: () => void;
};

export interface ModalOption {
    element: ReactNode;
}

export function useModal(options: ModalOption): ModalHookResponse {
    const [isVisible, setVisible] = useState(false);

    const result =  [
        <Modal isVisible={isVisible} setVisible={setVisible}>
            {options.element}
        </Modal>,
        () => setVisible(true),
        () => setVisible(false),
    ] as ModalHookResponse;

    result.placeholder = result[0];
    result.show = result[1];
    result.hide = result[2];

    return result;
}
