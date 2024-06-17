import React, { Fragment, useEffect } from "react";
import { BaseProductList } from "@widgets/base-product-list";
import { EditInBasket } from "@features/edit-in-basket";
import { IBasketProduct, useBasketMutation } from "@entities/basket";

export const ProductList = () => {
    const [fetchData, { data, isLoading, isError }] = useBasketMutation();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            <BaseProductList
                items={data}
                isLoading={isLoading}
                isError={isError}
                productCardAction={(product) => (
                    <EditInBasket product={product as IBasketProduct} />
                )}
            />
        </Fragment>
    );
};
