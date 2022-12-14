import { Item } from './../types/Item';

export const items: Item[] = [
    { 
      date: new Date(2022, 11, 13),
      category: 'food', 
      title: 'McDonalds', 
      value: 32.12,
    },
    { 
      date: new Date(2022, 11, 13),
      category: 'food', 
      title: 'Burguer King', 
      value: 32.12,
    },
    { 
      date: new Date(2022, 11, 22),
      category: 'rent', 
      title: 'Aluguel', 
      value: 2300,
    },
    { 
      date: new Date(2022, 12, 1),
      category: 'salary', 
      title: 'Salario ACME', 
      value: 4500,
    }
];