import { ProductCard } from "@entities/product-card";
import { useProductsQuery } from "@widgets/product-list/api/ProductListApi";
import { Col, Container, Spinner } from "react-bootstrap";
import { StyledRow } from "./ProductListStyles";
import { CategoriesList } from "@widgets/categories-selection";
import { memo, useState } from "react";
import { ICategory } from "@entities/category/model/ICategory";

export const ProductList = memo(() => {
    const [category, setCategory] = useState<ICategory>(null);
    const { data, isLoading, isError, error } = useProductsQuery(
        { category: category?.id },
        {
            //skip: category == null
        },
    );

    return (
        <Container>
            <CategoriesList onChange={setCategory} />
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

                {data?.map((item) => (
                    <Col xl={3} lg={4} md={6}>
                        <ProductCard
                            key={`${item.id}.${item.name}`}
                            src={item}
                        />
                    </Col>
                ))}
            </StyledRow>
        </Container>
    );
});
