export default function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2>
          Корзина{' '}
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center justify-between">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/02.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="ml-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn cu-p"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
          <div className="cartItem d-flex align-center justify-between">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/04.jpg)' }}
              className="cartItemImg"
            ></div>
            <div className="ml-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8 499 руб.</b>
            </div>
            <img
              className="removeBtn cu-p"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </div>
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
