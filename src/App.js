import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import AppContext from './context';
import Orders from './components/pages/Orders';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const isItemAdded = id => cartItems.some(item => item.parentId === id);

  useEffect(() => {
    setTotalPrice(
      prevState =>
        (prevState = cartItems.reduce((sum, item) => item.price + sum, 0))
    );
  }, [cartItems]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsRes, cartRes] = await Promise.all([
          axios.get('https://63df9565a76cfd410584dbbf.mockapi.io/items'),
          axios.get('https://63df9565a76cfd410584dbbf.mockapi.io/cart'),
        ]);

        setCartItems(cartRes.data);
        setItems(itemsRes.data);
        setIsLoading(false);
      } catch (e) {
        alert('Ошибка при запросе данных ;(');
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async obj => {
    if (!!cartItems.find(item => item.parentId === obj.parentId)) return;
    try {
      setCartItems(prev => [...prev, obj]);
      const { data } = await axios.post(
        'https://63df9565a76cfd410584dbbf.mockapi.io/cart',
        obj
      );
      setCartItems(prev =>
        prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          } else return item;
        })
      );
    } catch (e) {
      alert('Ошибка при добавлении в корзину ;(');
      console.log(e);
    }
  };

  const onRemoveToCart = async obj => {
    const findItem = cartItems.find(item => item.parentId === obj.id);
    if (!!findItem === true) {
      setCartItems(prevState => [
        ...prevState.filter(item => item.parentId !== obj.id),
      ]);
      try {
        await axios.delete(
          `https://63df9565a76cfd410584dbbf.mockapi.io/cart/${findItem.id}`
        );
      } catch (e) {
        alert('Ошибка при удалении из корзины ;(');
        console.error(e);
      }
    }
    if (!!findItem === false) {
      setCartItems(prevState => [
        ...prevState.filter(item => item.id !== obj.id),
      ]);
      try {
        await axios.delete(
          `https://63df9565a76cfd410584dbbf.mockapi.io/cart/${obj.id}`
        );
      } catch (e) {
        alert('Ошибка при удалении из корзины ;(');
        console.error(e);
      }
    }
  };

  const onChangeSearchInput = ev => {
    setSearchValue(ev.target.value);
  };
  const onAddToFavorite = obj => {
    if (favorites.find(value => value.id === obj.id)) {
      setFavorites(prevState => [
        ...prevState.filter(value => value.id !== obj.id),
      ]);
    } else {
      setFavorites(prevState => [...prevState, obj]);
    }
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        setCartOpened,
        setCartItems,
        totalPrice,
        isItemAdded,
        onAddToCart,
        onRemoveToCart,
        onAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          cardItems={cartItems}
          onClickClose={() => setCartOpened(false)}
          onClickRemove={obj => onRemoveToCart(obj)}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                isLoading={isLoading}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onRemoveToCart={onRemoveToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
