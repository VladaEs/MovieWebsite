import styles from './Header.module.css';
import BurgerMenu from './BurderMenu';
import { useState } from 'react';
const Header =()=>{
const [MenuVisible, setMenuVisible]=useState(false);

    const ShowMenu=()=>{
        setMenuVisible( prevVal=> !prevVal);
        
    }
    const items =[
        {value:"Main", href:'/'},
        {value:"About us", href:'#AboutUs'},
        {value:"Advanced features", href:'#AdvancedFeatures'},
        {value:"Advantages", href:'#Advantages'},
        {value:"Charity", href:'#Charity'},
        {value:"Competition", href:'#Competition'},
        {value:"Creators", href:'#Creators'},
        {value:"Contact us", href:'#ContuctUs'},
    ]
    return(
        <div className={styles.FullHeader}>
            
            <header className={styles.HeaderWrapper}>
                <div className={styles.brandName}>dominio</div>
                <div className={styles.BurgerMenu} onClick={ShowMenu}>
                    <span className={styles.rowBurger}></span>
                </div>
                
            </header>
            <BurgerMenu header={"DOMINIO"} items={items} isActive={MenuVisible} setActive={setMenuVisible}/>
        </div>
    )
}

export default Header;