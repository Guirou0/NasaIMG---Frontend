import { useEffect, useContext, useState } from "react"
import styles from "../modulescss/photo.module.css"


function Photo({info, foto}){
     return(
        <li className={styles.container} style={{backgroundImage: `url(${foto.url})`}}>
            <div className={styles.info}>
                <h3>{info[0]}</h3>
                    <p>{foto.title}</p>
                <div className={styles.sep}></div> 
                <h3>{info[1]}</h3>
                    <p>{foto.data}</p>
            </div>
        </li>
     )
}

export default Photo