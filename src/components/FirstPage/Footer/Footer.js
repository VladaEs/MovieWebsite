import styles from './Footer.module.css'
import Title from '../../containers/Title'
const Footer= ()=>{

    return(
        <div className={styles.imageWrapper} style={{backgroundImage: `url(${'/images/footer.png'})`}} id={"ContactUs"}>
            <div className={styles.TitleFooter}>
                <div className={styles.Title}><Title color={'white'}>Open digital world with Dominio</Title></div>
                <div className={styles.TitleLittle}>Write your email to create,renew or log in to your account</div>
            </div>
            <div className={styles.BottomSection}>
                <div className={styles.Contacts}>
                    <span>Have a questions? Call us</span>
                    <span>0800-890-678</span>
                </div>
                <div className={styles.inputEmailWrapper}>
                    <input type='text' name='email' className={styles.InputEmail} placeholder='E-mail'/>
                </div>
            </div>
        </div>
    )
}
export default Footer;