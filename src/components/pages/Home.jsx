import React from 'react';
import Card from '../Card';
import AppContext from '../../context';

export default function Home({
  searchValue,
  setSearchValue,
  isLoading,
  onAddToFavorite,
  onAddToCart,
  onRemoveToCart,
  onChangeSearchInput,
}) {
  const state = React.useContext(AppContext);
  const renderItems = () => {
    const filtredItems = state.items.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filtredItems).map((obj, index) => (
      <Card
        {...obj}
        key={index}
        onClickAdd={onAddToCart}
        onClickRemove={onRemoveToCart}
        onFavorite={onAddToFavorite}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-50">
      <div className="mb-40 d-flex justify-between ">
        <h1 className="">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex align-center">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              className="removeBtn clearInput cu-p"
              src="/img/btn-remove.svg"
              alt="clear"
              onClick={() => setSearchValue('')}
            />
          )}
        </div>
      </div>
      <div className="sneakers d-flex ">{renderItems()}</div>
    </div>
  );
}
