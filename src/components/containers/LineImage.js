import styles from './LineImage.module.css'


const LineImage= (props)=>{
    
    return(
        <div className={styles.ImageBG} style={{backgroundImage: `url(${props.src})`}}>
            {props.children}
        </div>
    )
}

export default LineImage;