export type CategoryItem = {
    title: string;
    color: string;
    expense: boolean;
}

export const initialCategories: CategoryItem[] = [
  { title: 'Alimentação', color: 'blue', expense: true },
  { title: 'Aluguel', color: 'brown', expense: true },
  { title: 'Salário', color: 'green', expense: false },
];