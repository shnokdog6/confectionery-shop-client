import {ICategory} from "@entities/category/model/ICategory";

export interface IProduct {
    id: number;
    preview: string;
    name: string;
    cost: number;
    categories: ICategory[];
}
