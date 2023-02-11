import React, { useState, useContext } from 'react';
import axios from 'axios';

import AppContext from '../../context';
import Info from '../Info';
import DrawerCard from './DrawerCard';

import styles from './Drawer.module.scss';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export default function Index({
  onClickClose,
  onClickRemove,
  cardItems = [],
  opened,
}) {
  const { cartItems, setCartItems, totalPrice } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://63e5029b4474903105f7307d.mockapi.io/orders',
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(item);
        await axios.delete(
          `https://63df9565a76cfd410584dbbf.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`example ${styles.overlay} ${
        opened ? styles.overlayVisible : styles.overlayHidden
      }`}
    >
      <div className={styles.drawer}>
        <h2>
          Корзина{' '}
          <img
            className={styles.removeBtn}
            src="/img/btn-remove.svg"
            alt="remove"
            onClick={onClickClose}
          />
        </h2>
        {cardItems.length > 0 ? (
          <>
            <div className={` example ${styles.items}`}>
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
                  <b className=""> {totalPrice} руб.</b>
                </li>
                <li>
                  <span className="">Налог 5%:</span>
                  <div className="dashed"></div>
                  <b className="">
                    {' '}
                    {((totalPrice / 100) * 5).toFixed(2)} руб.
                  </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ
                <img src="/img/arrow-right.svg" alt="arrow-right" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={
              isOrderCompleted
                ? '/img/complete-order.jpg'
                : '/img/cart-empty.jpg'
            }
          />
        )}
      </div>
    </div>
  );
}
