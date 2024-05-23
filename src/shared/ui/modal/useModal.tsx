import { ReactElement, ReactNode, useState } from "react";
import { Modal } from "@shared/ui/modal/Modal";

export type ModalHookResponse = [
    ReactElement,
    () => void
] & {
    placeholder: ReactElement;
    show: () => void;
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
    ] as ModalHookResponse;

    result.placeholder = result[0];
    result.show = result[1];

    return result;
}
