import React from 'react';
import AppContext from '../context';
export default function Info({ title, image, description }) {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img src={image} alt="" className="box mb-20" width={120} />
      <h2>{title}</h2>
      <p className="opacity-6 text-center">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img className="arrLeft" src="/img/arrow-left.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
}
