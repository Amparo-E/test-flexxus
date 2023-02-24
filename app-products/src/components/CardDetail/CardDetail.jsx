import style from "./CardDetail.module.css";

const CardDetail = ({ product }) => {
  const { name, code, price, image } = product;

  return (
    <div className={style.content_card_info}>
      <div className={style.content_img}>
        <img src={image} alt={name} />
      </div>
      <div className={style.card_info}>
        <h2>{name}</h2>
        <p>{code}</p>
        <p>
          Precio: <span>{price}</span>
        </p>
      </div>
    </div>
  );
};

export default CardDetail;
