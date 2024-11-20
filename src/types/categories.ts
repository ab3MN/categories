import { IProduct } from './product';
import { IUser } from './user';

export interface ICategory {
  id: number;
  title: string;
  ownerId: number;
}

export interface ICategories {
  category: ICategory;
  user: IUser;
  products: IProduct[];
}
