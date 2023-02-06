import Card from '../Card';
import React from 'react';

export default function Home({
  items,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  onRemoveToCart,
  onChangeSearchInput,
  setSearchValue,
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
                title={obj.title}
                price={obj.price}
                imgUrl={obj.imgUrl}
                key={index}
                id={obj.id}
                onClickAdd={obj => {
                  onAddToCart(obj);
                }}
                onClickRemove={obj => {
                  onRemoveToCart(obj);
                }}
                onFavorite={onAddToFavorite}
              />
            );
          })}
      </div>
    </div>
  );
}
