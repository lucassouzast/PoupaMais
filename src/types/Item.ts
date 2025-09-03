import { CategoryItem } from "./CategoryItem";

export type Item = {
    date: Date;
    category: CategoryItem |string; 
    title: string;
    value: number;
    _id?: string;
}

export type NewItem = {
    date: Date;
    category: string; 
    title: string;
    value: number;
    _id?: string;
}