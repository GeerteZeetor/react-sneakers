import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios
      .get('https://63df9565a76cfd410584dbbf.mockapi.io/items')
      .then(res => setItems(res.data));
    axios
      .get('https://63df9565a76cfd410584dbbf.mockapi.io/catr')
      .then(res => setCardItems(res.data));
  }, []);

  const onAddToCart = obj => {
    axios
      .post('https://63df9565a76cfd410584dbbf.mockapi.io/catr', obj)
      .then(res => {
        console.log(res);
        setCardItems(prev => [...prev, res.data]);
      });
  };

  const onRemoveToCart = obj => {
    axios
      .delete(`https://63df9565a76cfd410584dbbf.mockapi.io/catr/${obj.id}`)
      .then(res => {
        setCardItems(prevState => {
          return [...prevState.filter(value => value.id !== obj.id)];
        });
      })
      .catch(reason => console.log(reason));
  };
  const onChangeSearchInput = ev => {
    setSearchValue(ev.target.value);
  };
  const onAddToFavorite = obj => {
    setFavorites(prevState => [...prevState, obj]);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          cardItems={cardItems}
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
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onRemoveToCart={onRemoveToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

// const arr = [
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '12 999 руб.',
//     imgUrl: '/img/sneakers/01.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike Air Max 270',
//     price: '12 999 руб.',
//     imgUrl: '/img/sneakers/02.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '8499 руб.',
//     imgUrl: '/img/sneakers/03.jpg',
//   },
//   {
//     title: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: '8 999 руб.',
//     imgUrl: '/img/sneakers/04.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Under Armour Curry 8',
//     price: '15 199 руб.',
//     imgUrl: '/img/sneakers/05.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike Kyrie 7',
//     price: '11 299 руб.',
//     imgUrl: '/img/sneakers/06.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Jordan Air Jordan 11',
//     price: '10 799 руб.',
//     imgUrl: '/img/sneakers/07.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike LeBron XVIII',
//     price: '16 499 руб.',
//     imgUrl: '/img/sneakers/08.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike Lebron XVIII Low',
//     price: '13 999 руб.',
//     imgUrl: '/img/sneakers/09.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '8 499 руб.',
//     imgUrl: '/img/sneakers/01.jpg',
//   },
//   {
//     title: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: '8 999 руб.',
//     imgUrl: '/img/sneakers/04.jpg',
//   },
//   {
//     title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
//     price: '11 299 руб.',
//     imgUrl: '/img/sneakers/10.jpg',
//   },
// ];
