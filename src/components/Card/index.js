import styles from './Card.module.scss';
import React from 'react';
export default function Index(props) {
  const {
    title,
    price,
    imgUrl,
    onClickAdd,
    onClickRemove,
    onFavorite,
    favorited = false,
    added = false,
  } = {
    ...props,
  };
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const [isAdded, setIsAdded] = React.useState(added);

  const addClickHandler = obj => {
    setIsAdded(!isAdded);
    !isAdded ? onClickAdd(props) : onClickRemove(props);
  };

  const onClickFavorite = () => {
    onFavorite(props);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={!isFavorite ? '/img/unliked.svg' : '/img/liked.svg'}
          alt="unliked"
        />
      </div>
      <img className="ml-10" width={133} height={112} src={imgUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="text-uppercase">Цена:</span>
          <b>{price}</b>
        </div>
        <button onClick={obj => addClickHandler(obj)} className={styles.button}>
          <img
            width={32}
            height={32}
            src={!isAdded ? '/img/btn-plus.svg' : '/img/btn-checked.svg'}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}
