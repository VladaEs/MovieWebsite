import styles from '../Charity/Charity.module.css'
import BlockWrapper from '../../containers/BlockWrapper'
import SectionTitleLittle from '../../containers/SectionTitleLittle'
import Title from '../../containers/Title'
import Article from '../../containers/Article'
const Competition= ()=>{

    return(
        <BlockWrapper>
            <SectionTitleLittle><span id="Competition">Competition</span></SectionTitleLittle>
            <div className={styles.flex}>
            <img src='/images/Competition.jpg' className={styles.image} />
            <div className={styles.text}>
                <Title color='skin'>Charity<br/> advertising</Title>
                <Article width={60}>Watch short 30-second videos of 
                    advertisments with a charitable purpose
                </Article>
            </div>
        </div>
        </BlockWrapper>
    )
}
export default Competition;