import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import React from 'react';
import AppContext from '../../context';
export default function Index(props) {
  const {
    id,
    title,
    price,
    imgUrl,
    onClickAdd,
    onClickRemove,
    onFavorite,
    favorited = false,
    loading = false,
  } = {
    ...props,
  };
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  // React.useEffect(() => {
  //   setIsAdded(added);
  //   setIsFavorite(favorited);
  // }, [isFavorite, isAdded, added, favorited]);

  const addClickHandler = () => {
    !isItemAdded(id)
      ? onClickAdd({ ...props, parentId: props.id })
      : onClickRemove({ ...props, parentId: props.id });
  };

  const onClickFavorite = () => {
    onFavorite(props);
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={1}
          width={165}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            {onFavorite && (
              <img
                onClick={onClickFavorite}
                src={!isFavorite ? '/img/unliked.svg' : '/img/liked.svg'}
                alt="unliked"
              />
            )}
          </div>
          <img className="ml-10" width={133} height={112} src={imgUrl} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className="text-uppercase">Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onClickAdd && (
              <button onClick={addClickHandler} className={styles.button}>
                <img
                  width={32}
                  height={32}
                  src={
                    isItemAdded(id)
                      ? '/img/btn-checked.svg'
                      : '/img/btn-plus.svg'
                  }
                  alt="plus"
                />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
