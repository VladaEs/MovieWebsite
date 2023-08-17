import styles from './Collection.module.css'
import Item from './Item';

const Collection =(props)=>{

    return(
        <div className={styles.collection}>
            { !(Object.keys(props.items).length === 0)?  props.items.map((item,index) =><Item src={item.imgURL} genre={item.genre} name={item.name} key={index}/>):''}
        </div>
    )
}
export default Collection;