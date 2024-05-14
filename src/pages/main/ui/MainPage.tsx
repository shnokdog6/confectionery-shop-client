import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { CategoriesList } from "@widgets/categories-selection";
import { FixedNav } from "@widgets/fixed-nav/ui/FixedNav";
import { ProductList } from "@widgets/product-list";
import { PageWrapper } from "@shared/ui/page-wrapper";

export const MainPage = () => {
    return (
        <PageWrapper>
            <Header />
            <FixedNav />
            <ProductList />
            <Footer />
        </PageWrapper>
    );
};
