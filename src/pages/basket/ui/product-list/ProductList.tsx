import React, { Fragment, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { BaseProductList } from "@widgets/base-product-list";
import { EditInBasket } from "@features/edit-in-basket";
import { setOrderCost, Types, useBasketQuery } from "@entities/basket";
import { DeleteFromBasket } from "@features/delete-from-basket";
import { StyledDiv } from "./ProductList.styles";
import { useAppDispatch } from "@shared/api";

export const ProductList = () => {
    const { data, isLoading, isError } = useBasketQuery();
    const [selected, setSelected] = useState<Array<boolean>>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!data) return;
        setSelected(new Array(data.length).fill(false));
    }, [data]);

    function handleSelect(index: number) {
        setSelected(
            selected.map((item, key) => (index !== key ? item : !item)),
        );
    }

    useEffect(() => {
        let cost = 0;
        selected?.forEach((value, index) => {
            if (!value) return;
            cost += data[index].cost * data[index].count;
        });
        dispatch(setOrderCost(cost));
    }, [selected]);

    return (
        <Fragment>
            <BaseProductList
                items={data}
                isLoading={isLoading}
                isError={isError}
                productCardAction={(product, index) => (
                    <Stack
                        direction="vertical"
                        className="position-relative"
                        gap={3}
                    >
                        <StyledDiv
                            onClick={() => handleSelect(index)}
                            $selected={selected?.[index] || false}
                        />
                        <div className="d-flex justify-content-center">
                            <EditInBasket product={product as Types} />
                        </div>
                        <DeleteFromBasket product={product} />
                    </Stack>
                )}
            />
        </Fragment>
    );
};
