import styles from './Title.module.css';
const Title=(props)=>{

    return(
        <span className={styles.Title} style={{color: props.color=='skin'? 'var(--skincolor)':props.color}}>
            {props.children}
        </span>
    )
}

export default Title;