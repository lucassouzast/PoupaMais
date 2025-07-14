import { createContext, useState, useEffect, ReactNode } from "react";
import { getAllEntries } from "../services/entries.services";
import { Item } from "../types/Item";

interface EntriesContextType {
  entriesList: Item[];
  loadEntries: () => void;
}

export const EntriesContext = createContext<EntriesContextType>(
  {} as EntriesContextType
);

export const EntriesProvider = ({ children }: { children: ReactNode }) => {
  const [entriesList, setEntriesList] = useState<Item[]>([]);

  const loadEntries = () => {
    getAllEntries().then((res) => {
      if (res?.data?.length) {
        let arr: any = [];
        res.data.map((item: any) => {
          arr.push({
            ...item,
            date: new Date(item.date),
          });
        });
        setEntriesList(arr);
      } else {
        setEntriesList([]);
      }
    });
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ entriesList, loadEntries }}>
      {children}
    </EntriesContext.Provider>
  );
};
