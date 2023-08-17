import styles from './Charity.module.css';
import Title from '../../containers/Title';
import Article from '../../containers/Article';
import BlockWrapper from '../../containers/BlockWrapper';
const Charity=(props)=>{

    return(
        <BlockWrapper>
            <div className={styles.flex}>
            <img src='/images/charity.jpg' className={styles.image}/>
            <div className={styles.text}>
                <Title color='skin'>Charity<br id="Charity"/> advertising</Title>
                <Article width={60}>Watch short 30-second videos of 
                    advertisments with a charitable purpose
                </Article>
            </div>
            </div>
        </BlockWrapper>
    )
}
export default Charity