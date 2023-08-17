import styles from './BurgerMenu.module.css';
import { HashLink as Link } from 'react-router-hash-link';
const BurgerMenu=(props)=>{
    return (
    <div className={props.isActive? `${styles.menu} ${styles.active}`:`${styles.menu}`} onClick={()=>props.setActive(false)}>
        <div className={styles.blur}/>
        <div className={styles.menu_content} onClick={(e)=>e.stopPropagation()}>
            <div className={styles.menuHeader}>{props.header}</div>
            <ul>
                {props.items.map((item,index)=>
                    <li key={index} className={styles.itemMenu}> <Link to={item.href}>{item.value}</Link></li>)}
            </ul>
        </div>
    </div>
)}
export default BurgerMenu