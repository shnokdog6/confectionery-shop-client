import React, { FC, memo, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { CategoryButton, ICategory } from "@entities/category";
import { StyledStack, StyledWrapper } from "./CategorySelection.styles";

export interface CategoriesListProps {
    items: ICategory[];
    isLoading?: boolean;
    isError?: boolean;
    onSelected?: (category: ICategory) => void;
}

export const CategorySelection: FC<CategoriesListProps> = memo(
    ({ items, isLoading, isError, onSelected }) => {
        useEffect(() => {
            if (items) onSelected?.(items[0]);
        }, [items]);

        return (
            <Container>
                <StyledWrapper>
                    <StyledStack direction="horizontal">
                        {isLoading && (
                            <Spinner animation="border" role="status" />
                        )}

                        {isError && (
                            <div className="w-auto">
                                Не удалось загрузить категории
                            </div>
                        )}
                        {items &&
                            items.map((item) => (
                                <CategoryButton
                                    onClick={() => onSelected?.(item)}
                                    key={item.id}
                                >
                                    {item.name}
                                </CategoryButton>
                            ))}
                    </StyledStack>
                </StyledWrapper>
            </Container>
        );
    },
);
