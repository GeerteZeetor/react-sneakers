import React from 'react';

export default function Favorites({
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
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="sneakers d-flex "></div>
    </div>
  );
}
