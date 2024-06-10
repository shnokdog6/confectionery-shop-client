import React, { Fragment, memo, useEffect, useState } from "react";
import { useCategoryQuery, useProductsQuery } from "../api/assortmentListApi";
import { Spinner } from "react-bootstrap";
import { ICategory } from "@entities/category/model/ICategory";
import { ProductList } from "@entities/product";
import { CategoriesList } from "@entities/category";
import { StyledContainer } from "./AssortmentList.style";

export const AssortmentList = memo(() => {
    const [category, setCategory] = useState<ICategory>(null);
    const {
        data: categories,
        isLoading: categoriesLoading
    } = useCategoryQuery();

    const {
        data: products,
        isLoading: productsLoading
    } = useProductsQuery(
        {
            categories: category?.id
        },
        {
            skip: category == null
        }
    );

    useEffect(() => {
        if (categories)
            setCategory(categories[0]);
    }, [categories]);


    return (
        <StyledContainer>
            {categories
                ?
                categories.length
                    ?
                    <Fragment>
                        <CategoriesList items={categories} onChange={setCategory} />
                        <ProductList items={products || []} />
                    </Fragment>
                    :
                    <div className="mx-auto text-center">
                        Категорий нет
                    </div>
                :
                (categoriesLoading || productsLoading)
                    ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </Spinner>
                    :
                    <div className="mx-auto">
                        Не удалось загрузить ассортимент
                    </div>
            }
        </StyledContainer>
    );
});
