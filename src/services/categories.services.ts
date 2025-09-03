import api from "../config/api";

import { CategoryItem } from "../types/CategoryItem";
import { ItemCategory } from "../components/SelectCategories";

const getAuthHeaders =  async() => {
    const token = localStorage.getItem("token");
    return {
        Authorization: `Bearer ${token}`,
    };
};

export const getCategories = async () => {
    try {
        const headers = await getAuthHeaders();
        const response = api.get("/categories", {headers});
        return response;
    } catch (error) {
        console.log(error)
    }
};

export const createCategory = async (body: ItemCategory) => {
    const headers = await getAuthHeaders();
    const response = await api.post("/categories/", body, { headers });
    return response; 
};

export const updateCategory = async (id:string, body:CategoryItem) => {
    try {
        const headers = await getAuthHeaders();
        const response = api.put(`/categories/${id}`, body, {headers});
        return response;
    } catch (error) {
        console.log(error)
    }
};

export const deleteCategory = async (id: string) => {
    try {
        const headers = await getAuthHeaders();
        const response = api.delete(`/categories/${id}`, {headers});
        return response;
    } catch (error) {
        console.log(error)
    }
};