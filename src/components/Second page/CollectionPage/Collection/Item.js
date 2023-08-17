import styles from './Item.module.css'

const Item=(props)=>{

    return(
        <div className={styles.itemBox}>
            <img className={styles.previev} src={`${props.src}`}/>
            <span className={styles.name}>{props.name}</span>
            <span>{props.genre}</span>
        </div>
    )

}
export default Item