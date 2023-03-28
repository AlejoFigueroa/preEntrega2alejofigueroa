import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { BsCart2 } from 'react-icons/Bs';


const Navbar = () => {
    return (
    <nav className={styles.container}>
        <Link to="/home">
            <p>Home</p>
        </Link>
        <Link to="/products">
            <p>Products</p>
        </Link>
        <Link to="/cart">
            <BsCart2/>
        </Link>
    </nav>
)
}

export default Navbar