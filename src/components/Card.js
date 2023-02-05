export default function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/01.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="text-uppercase">Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={32} height={32} src="/img/btn-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
