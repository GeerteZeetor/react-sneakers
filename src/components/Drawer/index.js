import DrawerCard from './DrawerCard';

export default function Index({ onClickClose, onClickRemove, cardItems = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
            onClick={onClickClose}
          />
        </h2>
        {cardItems.length > 0 ? (
          <>
            <div className="items">
              {cardItems.map((obj, index) => {
                return (
                  <DrawerCard
                    {...obj}
                    onClickRemove={onClickRemove}
                    key={index}
                  />
                );
              })}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span className="">Итого:</span>
                  <div className="dashed"></div>
                  <b className="">21 498 руб.</b>
                </li>
                <li>
                  <span className="">Налог 5%:</span>
                  <div className="dashed"></div>
                  <b className="">1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ
                <img src="/img/arrow-right.svg" alt="arrow-right" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              src="/img/cart-empty.jpg"
              alt=""
              className="box mb-20"
              width={120}
              height={120}
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6 text-center">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClickClose} className="greenButton">
              <img className="arrLeft" src="/img/arrow-left.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
