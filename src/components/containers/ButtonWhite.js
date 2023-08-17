import styles from './ButtonWhite.module.css'
import { HashLink as Link } from 'react-router-hash-link';
const ButtonWhite= (props)=>{
    return(
        <button style={{width: `${props.width}%`}} className={styles.buttonWhite}>
            <Link to={props.href}>{props.children}</Link>
            </button>
    )
}
export default ButtonWhite;