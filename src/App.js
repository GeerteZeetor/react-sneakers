import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      const itemsRes = await axios.get(
        'https://63df9565a76cfd410584dbbf.mockapi.io/items'
      );
      const cartRes = await axios.get(
        'https://63df9565a76cfd410584dbbf.mockapi.io/cart'
      );

      setCartItems(cartRes.data);
      setItems(itemsRes.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const onAddToCart = async obj => {
    if (!!cartItems.find(item => item.title === obj.title)) return;
    try {
      const res = await axios.post(
        'https://63df9565a76cfd410584dbbf.mockapi.io/cart',
        obj
      );
      setCartItems(prev => [...prev, res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const onRemoveToCart = async obj => {
    if (!!!cartItems.find(item => item.title === obj.title)) return;
    try {
      await axios.delete(
        `https://63df9565a76cfd410584dbbf.mockapi.io/cart/${obj.id}`
      );
      setCartItems(prevState => {
        return [...prevState.filter(value => value?.id !== obj.id)];
      });
    } catch (e) {
      console.error(e);
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

  const isItemAdded = title => {
    return cartItems.some(item => item.title === title);
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        setCartOpened,
        setCartItems,
        isItemAdded,
        onAddToCart,
        onRemoveToCart,
        onAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            cardItems={cartItems}
            onClickClose={() => setCartOpened(false)}
            onClickRemove={obj => onRemoveToCart(obj)}
          />
        )}
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
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
