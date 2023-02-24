import CardDetail from "../CardDetail/CardDetail"
import style from "./CardList.module.css"
const CardList = ({products}) => {
    return (
        <div className={style.content_cards}>
            {products?.map((product, index) => <CardDetail product={product} key={index}/>)}
        </div>
    )
}

export default CardList