import Collection from "../Collection/Collection";
import Filters from "../Filters/Filters";
import styles from './PageWrapper.module.css'
import { useState,useEffect } from "react";
const PageWrapper =()=>{
    const [Items, SetItems]=useState({});
    useEffect(()=>{
        console.log(Items);
    },[Items]);
    const pullDataHandler=(data)=>{
        SetItems(data);
    }

    return(
        <div className={styles.WrapperPage}>
            <Collection items={Items}/>
            <Filters pullData={pullDataHandler}/>
        </div>
    )
}
export default PageWrapper;