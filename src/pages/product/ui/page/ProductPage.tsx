import React from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { PageWrapper } from "@shared/ui/page-wrapper";
import { FixedNav } from "@widgets/fixed-nav";
import { Footer } from "@shared/ui/footer";
import { useProductQuery } from "@entities/product";
import { ProductDetails } from "@pages/product/ui/product-details/ProductDetails";
import { ProductActions } from "@pages/product/ui/product-actions/ProductActions";

export const ProductPage = () => {
    const { productId } = useParams();
    const { data, isLoading, isError } = useProductQuery(+productId);
    const [ref, isFooterVisible] = useInView();

    return (
        <PageWrapper>
            <FixedNav />
            <ProductDetails
                product={data}
                isLoading={isLoading}
                isError={isError}
            />
            <ProductActions
                product={data}
                pinned={!isFooterVisible}
                isLoading={isLoading}
                isError={isError}
            />
            <Footer ref={ref} />
        </PageWrapper>
    );
};
