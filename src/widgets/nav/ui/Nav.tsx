import React, { useState } from "react";
import { StyledButtonsFlex, StyledStack } from "./NavStyles";
import { Search } from "@shared/ui/search";
import { OutlineButton } from "@shared/ui/outline-button/OutlineButton";
import { useNavigate } from "react-router-dom";
import { Modal } from "@shared/ui/modal";
import { SignInForm } from "@widgets/signin-form";

export const Nav = () => {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <StyledStack direction="horizontal">
            <StyledButtonsFlex direction="horizontal">
                <OutlineButton onClick={() => setIsModalVisible(true)}>
                    Войти
                </OutlineButton>
                <OutlineButton>Зарегистрироваться</OutlineButton>
            </StyledButtonsFlex>
            <Search />
            <Modal isVisible={isModalVisible} setVisible={setIsModalVisible}>
                <SignInForm/>
            </Modal>
        </StyledStack>
    );
};
