import styles from '../AdvancedFeatures/AdvancedFeatures.module.css';
import SectionTitleLittle from '../../containers/SectionTitleLittle'
import BlockWrapper from '../../containers/BlockWrapper'
import LineImage from '../../containers/LineImage';
import Article from '../../containers/Article';
import ButtonWhite from '../../containers/ButtonWhite';
const TopMovie=()=>{
    return(
        <BlockWrapper>
            <SectionTitleLittle>Movie of the week</SectionTitleLittle>
            <LineImage src={'/images/TopMovieOfTheWeek.png'}>
            <div className={styles.ContentWrapper}>
            <div className={styles.TitleMiddle}>Top Movie</div>
            
            <Article width={50}>
                <div className={styles.Center}>
                Every week on our platform the position `Top movue of the week` 
                is updated by the number of views and positive ratings
                </div>
            </Article>
            <ButtonWhite href={'/collection'}>Click to know</ButtonWhite>
            </div>
        </LineImage>
        </BlockWrapper>
    )
} 

export default TopMovie;