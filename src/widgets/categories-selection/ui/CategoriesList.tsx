import {ICategory} from "@entities/category/model/ICategory";
import {Button} from "@shared/ui/button";
import {Dispatch, FC, memo, SetStateAction, useState} from "react";
import {useCategoryQuery} from "../api/categoryListApi";
import {StyledStack, StyledWrapper} from './CategoriesListStyles';

export interface CategoriesListProps {
    onChange?: (category: ICategory) => void;
}

export const CategoriesList: FC<CategoriesListProps> = memo(({onChange}) => {
    const {data, isLoading, isError, isSuccess} = useCategoryQuery();

    if (isSuccess) onChange?.(data[0]);

    return (
        <StyledWrapper>
            <StyledStack direction="horizontal">
                {
                    data?.map((item) => (
                        <Button
                            onClick={() => onChange?.(item)}
                            key={item.id}
                        >
                            {item.name}
                        </Button>
                    ))
                }
            </StyledStack>
        </StyledWrapper>
    );
});
