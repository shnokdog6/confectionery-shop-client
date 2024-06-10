import React from "react";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { FixedNav } from "@widgets/fixed-nav";
import { Footer } from "@shared/ui/footer";
import { useAuthGuard } from "@entities/auth";
import { useProductsQuery } from "../api/basketPageApi";
import { Container, Spinner } from "react-bootstrap";
import { ProductList } from "@entities/product";

export const BasketPage = () => {
    useAuthGuard();
    const { data, isLoading, isError } = useProductsQuery();

    return (
        <PageWrapper>
            <FixedNav />
            <Container>
                {isLoading &&
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </Spinner>
                }

                {isError &&
                    <div className="w-auto text-center">
                        Произошла ошибка
                    </div>
                }

                {data?.length ?
                    <ProductList items={data} />
                    :
                    <div className="w-auto text-center">
                        Корзина пустая
                    </div>
                }
            </Container>
            <Footer />
        </PageWrapper>
    );
};
