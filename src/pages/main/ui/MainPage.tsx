import React from 'react';
import {ProductList} from "@widgets/product-list";
import {Footer} from "@shared/footer";
import {Header} from "@shared/header";
import {FixedNav} from "@widgets/fixed-nav/ui/FixedNav";
import {CategoriesList} from "@widgets/categories-selection";
import {StyledWrapper} from "./MainPageStyles"

export const MainPage = () => {
    return (
        <StyledWrapper>
            <Header/>
            <FixedNav/>
            <CategoriesList/>
            <ProductList/>
            <Footer/>
        </StyledWrapper>
    );
};
