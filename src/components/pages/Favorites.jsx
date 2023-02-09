import React from 'react';
import Card from '../Card';
import AppContext from '../../context';

export default function Favorites() {
  const state = React.useContext(AppContext);
  return (
    <div className="content p-50">
      <div className="mb-40 d-flex justify-between ">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="sneakers d-flex ">
        {state.favorites.map((obj, index) => {
          return (
            <Card
              {...obj}
              favorited={true}
              key={index}
              onFavorite={state.onAddToFavorite}
              onClickAdd={state.onAddToCart}
              onClickRemove={state.onRemoveToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
