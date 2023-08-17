import styles from './SectionTitleLittle.module.css';
const SectionTitleLittle = (props)=>{

    return(
        <span className={styles.aboutusLittle}>{props.children}</span>
    )
}
export default SectionTitleLittle;