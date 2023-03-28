import { Link } from "react-router-dom"
import styles from "./card.module.css"


const Card = ({producto}) => {
    return (
        <Link to={`${producto.id}`}>
        <div className={styles.container}>
            <h3 className={styles.title}>{producto.title}</h3>
            <img className={styles.img} src={producto.image} alt={producto.title} width="200" height="250"/>
            <p>{producto.description}</p>
            <p className={styles.price}>${producto.price}</p>
    </div>
    </Link>
)
}

export default Card