import { ProductTable } from '../../components/thinking-in-product/product-table';
import { SearchBar } from '../../components/thinking-in-product/search-bar';
import { ProductContextProvider } from '../../contexts';

export function ThinkingInReactPage() {
  return (
    <ProductContextProvider>
      <>
        <SearchBar />
        <ProductTable />
      </>
    </ProductContextProvider>
  );
}

export default ThinkingInReactPage;
