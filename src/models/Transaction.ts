import { Category } from "./Category";

export interface Transaction {
  id: string;
  type: 'positive' | 'negative';
  title: string;
  value: string;
  category: Category;
  date: string;
}