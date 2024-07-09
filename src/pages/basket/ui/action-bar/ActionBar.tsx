import React, { FC } from "react";
import { FixedWidget } from "@shared/ui/fixed-widget";
import { Container, Stack } from "react-bootstrap";
import { Button } from "@shared/ui/button";
import { useAppSelector } from "@shared/api";
import { selectOrderCost } from "@entities/basket";
import { Span } from "@shared/ui/span";

interface ActionBarProps {
    pinned?: boolean;
}

export const ActionBar: FC<ActionBarProps> = ({ pinned }) => {
    const orderCost = useAppSelector(selectOrderCost);

    return (
        <FixedWidget className="mt-auto" pinned={pinned}>
            <Container className="d-flex justify-content-end py-3">
                <Stack direction="horizontal" gap={4}>
                    <Span>{orderCost}₽</Span>
                    <Button color="black">Заказать</Button>
                </Stack>
            </Container>
        </FixedWidget>
    );
};
