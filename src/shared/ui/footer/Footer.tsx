import React, { FC, HTMLAttributes } from "react";
import { StyledContainer, StyledDiv, StyledFooter } from "./FooterStyles";
import { Stack } from "react-bootstrap";
import { ImageLink } from "@shared/ui/image-link";
import whatsapp from "@images/whatsapp.png";
import telegram from "@images/telegram.png";
import vk from "../../assets/images/vk.png";

export const Footer: FC<HTMLAttributes<HTMLElement>> = (props) => {
    return (
        <StyledFooter {...props}>
            <StyledContainer>
                <StyledDiv>Copyright © 2024 Территория Вкуса</StyledDiv>
                <Stack direction="horizontal" gap={3}>
                    <ImageLink width={30} height={35} src={whatsapp} />
                    <ImageLink width={30} height={35} src={telegram} />
                    <ImageLink
                        width={30}
                        height={35}
                        src={vk}
                        href="https://vk.com/"
                    />
                </Stack>
            </StyledContainer>
        </StyledFooter>
    );
};
