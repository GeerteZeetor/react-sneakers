export default function DrawerCard(props) {
  const { title, price, imgUrl, onClickRemove } = {
    ...props,
  };
  return (
    <div className="cartItem d-flex align-center justify-between">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="cartItemImg"
      ></div>
      <div className="ml-20">
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <img
        onClick={() => {
          onClickRemove(props);
        }}
        className="removeBtn cu-p"
        src="/img/btn-remove.svg"
        alt="remove"
      />
    </div>
  );
}
