import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-50">
        <div className="mb-40 d-flex justify-between ">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers d-flex justify-between">
          <Card />
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/02.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/03.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/04.jpg" alt="" />
            <h5>
              Кроссовки Puma X <br /> Aka Boku Future Rider
            </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/05.jpg" alt="" />
            <h5>Мужские Кроссовки Under Armour Curry 8</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>15 199 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/06.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/07.jpg" alt="" />
            <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>10 799 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/08.jpg" alt="" />
            <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>16 499 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/09.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>13 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/01.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/04.jpg" alt="" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-liked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/10.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="text-uppercase">Цена:</span>
                <b>11 299 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
