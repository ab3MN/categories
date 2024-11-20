import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { IUser } from './types/user';
import { CategoryList } from './CategoryList/CategoryList';

const getCategories = () =>
  categoriesFromServer.map(category => ({
    category,
    products: productsFromServer.filter(
      product => product.categoryId === category.id,
    ),
    user: usersFromServer.find(user => user.id === category.ownerId) as IUser,
  }));

export const App = () => (
  <div className="container">
    <CategoryList categories={getCategories()} />
  </div>
);
