import { ChangeEvent, useCallback } from 'react';
import { useProduct } from '../../contexts';

export function SearchBar() {
  const {
    searchByText: setSearchByText,
    searchedText,
    setIsStockOnly,
    isStockOnly,
  } = useProduct();

  const searchByText = useCallback(
    ($event: ChangeEvent<HTMLInputElement>) => {
      $event.stopPropagation();
      setSearchByText($event.target.value);
    },
    [setSearchByText]
  );

  const searchByStockOnly = useCallback(
    ($event: ChangeEvent<HTMLInputElement>) => {
      $event.stopPropagation();
      setIsStockOnly($event.target.checked);
    },
    [setIsStockOnly]
  );

  return (
    <div>
      <div>
        <input type="text" value={searchedText} onChange={searchByText} />
      </div>
      {isStockOnly}
      <div>
        <label>
          <input
            type="checkbox"
            checked={isStockOnly}
            onChange={searchByStockOnly}
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}
