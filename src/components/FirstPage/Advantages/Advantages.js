import styles from './Advantages.module.css';
import BlockWrapper from '../../containers/BlockWrapper';
import SectionTitleLittle from '../../containers/SectionTitleLittle';
import Article from '../../containers/Article';
import Title from '../../containers/Title';
const Advantages= ()=>{

    return(
        <BlockWrapper marginTop={15}>
            <SectionTitleLittle><span id="Advantages"> Advantages</span></SectionTitleLittle>
            <div className={styles.Contentwrapper}>
                <img src='/images/SecondBlock.png'  className={styles.ContentImage}/>
                <div className={styles.infoPart}>
                    <Title>Anywhere,<br/> anytime, anyway</Title>
                    <Article width={55}>Watch movies and TV shows on any device,
                     at the time and place a convenient for you
                     </Article>      
                </div>
            </div>
        </BlockWrapper>
    )
}

export default Advantages;