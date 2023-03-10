import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context';
export default function Index({ onClickCart }) {
  const { totalPrice } = useContext(AppContext);

  return (
    <header className="d-flex justify-between p-45 align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
            className="logo"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30" onClick={onClickCart}>
          <img
            className="cu-p"
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="cart"
          />
          <span className="cu-p">{totalPrice} руб.</span>
        </li>

        <li className="mr-30">
          <Link to="/favorites">
            <img
              className="cu-p"
              width={20}
              height={20}
              src="/img/heart-header.svg"
              alt="user"
            />
          </Link>
        </li>
        <Link to="/orders">
          <li>
            <img
              className="cu-p"
              width={20}
              height={20}
              src="/img/user.svg"
              alt="user"
            />
          </li>
        </Link>
      </ul>
    </header>
  );
}
