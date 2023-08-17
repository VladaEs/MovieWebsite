import styles from './BlockWrapper.module.css'
const BlockWrapper = (props)=>{

    return(
    <div className={styles.BlockWrapper} style={{marginTop:`${props.marginTop}%`}}>
        {props.children}
    </div>)
} 
export default BlockWrapper;