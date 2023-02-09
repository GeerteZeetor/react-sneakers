import Card from '../Card';
import React from 'react';

export default function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onAddToFavorite,
  onAddToCart,
  onRemoveToCart,
  onChangeSearchInput,
}) {
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
      <div className="sneakers d-flex ">
        {items
          .filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => {
            return (
              <Card
                {...obj}
                key={index}
                onClickAdd={onAddToCart}
                onClickRemove={onRemoveToCart}
                onFavorite={onAddToFavorite}
                added={cartItems.some(item => item.title === obj.title)}
              />
            );
          })}
      </div>
    </div>
  );
}
