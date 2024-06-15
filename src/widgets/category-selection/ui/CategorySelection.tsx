import { ICategory } from "@entities/category/model/ICategory";
import { CategoryButton } from "@entities/category/ui/category-button";
import React, { FC, memo, useEffect } from "react";
import { useCategoryQuery } from "../api/categorySelectionApi";
import { StyledStack, StyledWrapper } from "./CategorySelection.styles";

export interface CategoriesListProps {
    onSelected?: (category: ICategory) => void;
}

export const CategorySelection: FC<CategoriesListProps> = memo(
    ({ onSelected }) => {
        const { data, isSuccess } = useCategoryQuery();

        useEffect(() => {
            if (isSuccess) onSelected?.(data[0]);
        }, [isSuccess]);

        return (
            <StyledWrapper>
                <StyledStack direction="horizontal">
                    {data?.map((item) => (
                        <CategoryButton
                            onClick={() => onSelected?.(item)}
                            key={item.id}
                        >
                            {item.name}
                        </CategoryButton>
                    ))}
                </StyledStack>
            </StyledWrapper>
        );
    },
);
