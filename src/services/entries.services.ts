import api from "../config/api";

type Entry = {
  category: string;
  title: string;
  date: Date;
  value: number;
};

export const getAllEntries = async () => {
  try {
    const response = await api.get("/entries");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEntryById = async (id: string) => {
  try {
    const response = await api.get(`/entries/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createEntry = async (body: Entry) => {
  try {
    const response = await api.post(`/entries`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateEntry = async (id: string, body: Entry) => {
  try {
    const response = await api.put(`/entries/${id}`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEntry = async (id: string) => {
  try {
    const response = await api.delete(`/entries/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
