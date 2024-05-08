import React from 'react';
import {Button} from "@shared/button";
import {StyledStack, StyledWrapper} from './CategoriesListStyles';

export const CategoriesList = () => {
    return (
        <StyledWrapper>
                <StyledStack direction="horizontal">
                    <Button>Новинки</Button>
                    <Button>Популярное</Button>
                    <Button>Пироги</Button>
                    <Button>Торты</Button>
                    <Button>Десерты</Button>
                    <Button>Гастробоксы</Button>
                </StyledStack>
        </StyledWrapper>
    );
};