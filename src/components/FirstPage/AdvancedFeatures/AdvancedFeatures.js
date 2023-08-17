import styles from './AdvancedFeatures.module.css';
import LineImage from '../../containers/LineImage';
import Article from '../../containers/Article';
import ButtonWhite from '../../containers/ButtonWhite';
const AdvancedFeatures= ()=>{
    return(
        <div className={styles.AdvancedFeatures}>
        <LineImage src={'/images/long_line1.png'}>
            <div className={styles.ContentWrapper}>
            <div className={styles.TitleMiddle}><span id="AdvancedFeatures">Advanced Features</span></div>
            
            <Article width={50}>
                <div className={styles.Center}>
                Watch your favourite movies, series, cartoons with the 
                best quality voice acting and subtitles in 15+ languages
                </div>
            </Article>
            <ButtonWhite href={'/collection'}>Watch Collection</ButtonWhite>
            </div>
        </LineImage>
        </div>
    )
}
export default AdvancedFeatures;