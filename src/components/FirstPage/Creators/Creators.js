import styles from './Creators.module.css'
import { useState,} from 'react';
const Creators = ()=>{
    



    return(
        <div className={styles.Creators} id="Creators">
            <span>Dominio</span>
            <span>Ukraine-UK</span>
            <span>@ {new Date().getFullYear()}</span>
        </div>
    )
}
export default Creators;