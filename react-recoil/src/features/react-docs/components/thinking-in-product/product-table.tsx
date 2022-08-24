import { useMemo } from 'react';
import { useProduct } from '../../contexts';

export function ProductTable() {
  const { products } = useProduct();
  const tableRows = useMemo(() => {
    return products.map((product, i) => {
      return (
        <tr key={`${product.name}`}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  }, [products]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
