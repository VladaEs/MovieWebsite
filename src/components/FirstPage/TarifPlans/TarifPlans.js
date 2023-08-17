import styles from './TarifPlans.module.css'
import SectionTitleLittle from "../../containers/SectionTitleLittle";
import BlockWrapper from '../../containers/BlockWrapper';
import ButtonWhite from '../../containers/ButtonWhite';
const TariffPlans= ()=>{
    return(
        <BlockWrapper>
            <SectionTitleLittle>Tariff Plans</SectionTitleLittle>
            <div className={styles.blocksWrapper}>
                <div className={styles.tariff}>
                    <span className={styles.title}>Basic</span>
                    <div className={styles.description}>
                        <div className={styles.LineDescription}>
                            <img src='/images/close.png'/><span>HD avaliable</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/close.png'/><span>Ultra HD avaliable</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Advertisment (30 sec video) </span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Watch on any device</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Unlimited movies and serials</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Cancel any time</span>
                        </div>
                    </div>
                    <span className={styles.price}> $0/Month</span>
                    <div className={styles.button}>
                    <ButtonWhite width={100} href={'/activation'}>Active now</ButtonWhite>
                    </div>
                </div>
                <div className={styles.tariff}>
                    <span className={styles.title}>Standart</span>
                    <div className={styles.description}>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>HD avaliable</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Ultra HD avaliable</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Advertisment (30 sec video) </span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Watch on any device</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Unlimited movies and serials</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Cancel any time</span>
                        </div>
                    </div>
                    <span className={styles.price}> $3/Month</span>
                    <div className={styles.button}>
                    <ButtonWhite width={100} href={'/activation'}>Active now</ButtonWhite>
                    </div>
                </div>
                <div className={styles.tariff}>
                    <span className={styles.title}>Premium</span>
                    <div className={styles.description}>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>HD avaliable</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Ultra HD avaliable</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/close.png'/><span>Advertisment (30 sec video) </span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Watch on any device</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Unlimited movies and serials</span>
                        </div>
                        <div className={styles.LineDescription}>
                            <img src='/images/checkbox.png'/><span>Cancel any time</span>
                        </div>
                    </div>
                    <span className={styles.price}> $7/Month</span>
                    <div className={styles.button}>
                    <ButtonWhite width={100} href={'/activation'}>Active now</ButtonWhite>
                    </div>
                </div>
                
            </div>
        </BlockWrapper>
    )
}
export default TariffPlans;