import styles from './AboutUs.module.css';
import BlockWrapper from '../../containers/BlockWrapper';
import SectionTitleLittle from '../../containers/SectionTitleLittle';
import ButtonWhite from '../../containers/ButtonWhite';
import Article from '../../containers/Article';
const AboutUs =()=>{
    return(
        <BlockWrapper marginTop={5}>
            <SectionTitleLittle><span id="AboutUs">About us</span></SectionTitleLittle>
            <div className={styles.SectionText}>
                <span className={styles.header}>new era</span>
                <Article>DOMINIO - is a new era of movie streaming platform. Here you can fing a collection of films about future- IT, travel to the new world, fantasy, action movies.</Article>
                <div className={styles.ButtonWhite}>
                    <ButtonWhite href={'/collection'}>Watch collection</ButtonWhite>
                </div>
            </div>
        </BlockWrapper>

    )
}
export default AboutUs;