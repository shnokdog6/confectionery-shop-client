import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { CategoriesList } from "@widgets/categories-selection";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { ProductList } from "@widgets/product-list";
import { StyledWrapper } from "./MainPageStyles";

export const MainPage = () => {
    return (
        <StyledWrapper>
            <Header />
            <FixedNav />
            <ProductList />
            <Footer />
        </StyledWrapper>
    );
};
