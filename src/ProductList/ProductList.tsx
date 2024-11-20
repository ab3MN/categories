import { FC } from 'react';
import { IProduct } from '../types/product';

interface IProps {
  products: IProduct[];
}

export const ProductList: FC<IProps> = ({ products }) => (
  <ul className="ui list">
    {products.map(({ name, id }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);
