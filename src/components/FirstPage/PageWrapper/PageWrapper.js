import styles from './PageWrapper.module.css';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Advantages from '../Advantages/Advantages';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import Charity from '../Charity/Charity';
import TariffPlans from '../TarifPlans/TarifPlans';
import TopMovie from '../TopMovie/TopMovie';
import Competition from '../Competition/Competition';
import Footer from '../Footer/Footer';
import Creators from '../Creators/Creators';
const FirstPageWrapper=()=>{

    return(
        <div className={styles.pageWrapper}>
            
            <AboutUs/>
            <Advantages/>
            <AdvancedFeatures />
            <Charity />
            <TariffPlans/>
            <TopMovie />
            <Competition/>
            <Footer/>
            <Creators/>
        </div>
    )
}
export default FirstPageWrapper;