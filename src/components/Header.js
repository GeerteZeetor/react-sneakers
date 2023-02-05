export default function Header() {
  return (
    <header className="d-flex justify-between p-45 align-center">
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
      <ul className="d-flex ">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img width={20} height={20} src="/img/heart-header.svg" alt="user" />
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
