import React, { Fragment, useState } from "react";
import { CategorySelection } from "@widgets/category-selection";
import { BaseProductList } from "@widgets/base-product-list";
import { AddToBasket } from "@features/add-to-basket";
import { ICategory, useCategoryQuery } from "@entities/category";
import { useProductsQuery } from "@entities/product";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState<ICategory>();
    const {
        data: categories,
        isLoading: isCategoriesLoading,
        isError: isCategoriesLoadingError,
    } = useCategoryQuery();
    const {
        data: products,
        isLoading: isProductsLoading,
        isError: isProductsLoadingError,
    } = useProductsQuery({
        categories: category ? [category] : null,
    });

    return (
        <Fragment>
            <CategorySelection
                items={categories}
                isLoading={isCategoriesLoading}
                isError={isCategoriesLoadingError}
                onSelected={(value) => setCategory(value)}
            />
            <BaseProductList
                items={products}
                isLoading={isProductsLoading}
                isError={isProductsLoadingError}
                onCardClick={(productID) => navigate(`/product/${productID}`)}
                productCardAction={(product) => (
                    <AddToBasket product={product} />
                )}
            />
        </Fragment>
    );
};
