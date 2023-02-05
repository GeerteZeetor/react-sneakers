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

        <div className="items">
          {cardItems.map((obj, index) => {
            return (
              <DrawerCard
                title={obj.title}
                price={obj.price}
                imgUrl={obj.imgUrl}
                id={obj.id}
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
      </div>
    </div>
  );
}
