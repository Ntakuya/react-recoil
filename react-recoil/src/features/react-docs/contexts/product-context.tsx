import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react';

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

const PRODUCTS: Array<Product> = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

type ProductcontextValue = {
  products: Array<Product>;
  searchByText: (text: string) => void;
  isStockOnly: boolean;
  searchedText: string;
  setIsStockOnly: (isStockOnly: boolean) => void;
};

const ProductContext = createContext<ProductcontextValue>({
  products: [],
  isStockOnly: false,
  searchedText: '',
  searchByText: () => {
    throw new Error('[Client] Context is not initialized');
  },
  setIsStockOnly: () => {
    throw new Error('[Client] Context is not initialized');
  },
});

type ProductContextProviderProps = {
  children: ReactElement;
};

export const ProductContextProvider: FC<ProductContextProviderProps> = ({
  children,
}) => {
  const [searchedText, searchByText] = useState<string>('');
  const [isStockOnly, setIsStockOnly] = useState<boolean>(false);

  const products = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (isStockOnly && !product.stocked) {
        return false;
      }
      if (searchedText.length !== 0) {
        return product.name.includes(searchedText);
      }
      return true;
    });
  }, [searchedText, isStockOnly]);
  return (
    <ProductContext.Provider
      value={{
        products,
        searchByText,
        isStockOnly,
        searchedText,
        setIsStockOnly,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const contextValue = useContext(ProductContext);

  return contextValue;
}
