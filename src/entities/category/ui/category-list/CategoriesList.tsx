import React, { FC, memo } from "react";
import { StyledStack, StyledWrapper } from "./CategoriesListStyles";
import { CategoryButton, ICategory } from "@entities/category";

export interface CategoriesListProps {
    items: ICategory[];
    onChange?: (category: ICategory) => void;
}

export const CategoriesList: FC<CategoriesListProps> = memo(({ items, onChange }) => {
    return (
        <StyledWrapper>
            <StyledStack direction="horizontal">
                {items.map((item) => (
                    <CategoryButton onClick={() => onChange?.(item)} key={item.id}>
                        {item.name}
                    </CategoryButton>
                ))}
            </StyledStack>
        </StyledWrapper>
    );
});
