import React, { forwardRef, HTMLAttributes } from "react";
import { StyledContainer, StyledDiv, StyledFooter } from "./Footer.module";
import { Stack } from "react-bootstrap";
import { ImageLink } from "@shared/ui/image-link";
import whatsapp from "@images/whatsapp.png";
import telegram from "@images/telegram.png";
import vk from "@images/vk.png";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
    return (
        <StyledFooter {...props} ref={ref}>
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
});
