import styles from './Article.module.css'
const Article= (props)=>{

    return(
        <span className={styles.article} style={{width:`${props.width}%`}}>{props.children}</span>
    )
}

export default Article;