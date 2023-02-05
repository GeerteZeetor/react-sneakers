import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63df9565a76cfd410584dbbf.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json));
  }, []);
  const onAddToCart = obj => {
    setCardItems(prev => [...prev, obj]);
  };

  const onRemoveToCart = obj => {
    setCardItems(prevState => {
      return [...prevState.filter(value => value.id !== obj.id)];
    });
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          cardItems={cardItems}
          onClickClose={() => setCartOpened(false)}
          onClickRemove={onRemoveToCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-50">
        <div className="mb-40 d-flex justify-between ">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers d-flex justify-between">
          {items.map((obj, index) => {
            return (
              <Card
                title={obj.title}
                price={obj.price}
                imgUrl={obj.imgUrl}
                key={index}
                id={obj.id}
                onClickAdd={obj => {
                  onAddToCart(obj);
                }}
                onClickRemove={obj => {
                  onRemoveToCart(obj);
                }}
              />
            );
          })}
        </div>
      </div>
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
