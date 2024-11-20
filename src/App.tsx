import './App.scss';

import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';
import { ProductList } from './ProductList/ProductList';

const getCategoriesWithUser = () => {
  return categoriesFromServer.map(category => {
    const products = productsFromServer.filter(
      product => product.categoryId === category.id,
    );

    const user = usersFromServer.find(user => user.id === category.ownerId);

    return { category, products, user };
  });
};

export const App = () => (
  <div className="container">
    {getCategoriesWithUser().map(({ category, products, user }) => (
      <div className="ui card" key={category.id}>
        <div className="ui content">
          <div className="ui description">
            <p>
              {category.title} - ({user?.name})
            </p>

            {products.length ? (
              <ProductList products={products} />
            ) : (
              <b>No products</b>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);
