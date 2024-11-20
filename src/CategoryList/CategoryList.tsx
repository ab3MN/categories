import { FC } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { ICategories } from '../types/categories';

interface IProps {
  categories: ICategories[];
}

export const CategoryList: FC<IProps> = ({ categories }) =>
  categories.map(({ category, products, user }) => (
    <div className="ui card" key={category.id}>
      <div className="ui content">
        <div className="ui description">
          <p>
            {category.title} - ({user.name})
          </p>

          {products.length ? (
            <ProductList products={products} />
          ) : (
            <b>No products</b>
          )}
        </div>
      </div>
    </div>
  ));
