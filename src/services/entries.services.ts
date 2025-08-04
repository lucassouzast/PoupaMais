import api from "../config/api";

import {Entry} from '../types/Entry'


const getAuthHeaders = async () => {
  const token = await localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getAllEntries = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get("/entries", { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEntryById = async (id: string) => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get(`/entries/${id}`, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createEntry = async (body: Entry) => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.post(`/entries`, body, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateEntry = async (id: string, body: Entry) => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.put(`/entries/${id}`, body, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEntry = async (id: string) => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.delete(`/entries/${id}`, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};
