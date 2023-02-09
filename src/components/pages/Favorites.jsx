import React from 'react';
import Card from '../Card';

export default function Favorites({
  items,
  onAddToFavorite,
  onAddToCart,
  onRemoveToCart,
}) {
  return (
    <div className="content p-50">
      <div className="mb-40 d-flex justify-between ">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="sneakers d-flex ">
        {items.map((obj, index) => {
          return (
            <Card
              {...obj}
              favorited={true}
              key={index}
              onFavorite={onAddToFavorite}
              onClickAdd={obj => {
                onAddToCart(obj);
              }}
              onClickRemove={obj => {
                onRemoveToCart(obj);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
