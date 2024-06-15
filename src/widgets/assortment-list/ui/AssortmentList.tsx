import React, { memo, useState } from "react";
import { ProductList } from "@entities/product";
import { useProductsQuery } from "../api/AssortmentListApi";
import { Container, Spinner } from "react-bootstrap";
import { StyledRow } from "./AssortmentList.styles";
import { ICategory } from "@entities/category/model/ICategory";
import {CategorySelection} from "@widgets/category-selection";

export const AssortmentList = memo(() => {
    const [category, setCategory] = useState<ICategory>(null);
    const { data, isLoading, isError, error } = useProductsQuery(
        { category: category?.id },
        {
            //skip: category == null
        },
    );

    return (
        <Container>
            <CategorySelection onSelected={setCategory} />
            <StyledRow>
                {isLoading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}

                {isError && (
                    <div className="w-auto">
                        {JSON.stringify(error)} - Не удалось загрузить товар
                    </div>
                )}

                {data && <ProductList items={data}/>}
            </StyledRow>
        </Container>
    );
});
