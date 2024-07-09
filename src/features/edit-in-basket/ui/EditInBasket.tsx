import React, { FC, useEffect, useRef, useState } from "react";
import { Types, usePatchBasketMutation } from "@entities/basket";
import { Counter } from "@shared/ui/counter";

export interface EditInBasketProps {
    product: Types;
}

export const EditInBasket: FC<EditInBasketProps> = ({ product }) => {
    const [count, setCount] = useState(product.count);
    const countRef = useRef<number>(count);
    const [patchBasketQuery] = usePatchBasketMutation();

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    useEffect(() => {
        return () => {
            patchBasketQuery({
                product: { id: product.id, count: countRef.current },
            });
        };
    }, []);

    return <Counter min={1} max={10} value={count} setValue={setCount} />;
};
