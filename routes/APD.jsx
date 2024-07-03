import { useEffect, useContext, useState } from "react";
import styles from "../modulescss/APD.module.css"

import { MenuContext } from "../context/MenuContext"

import PhotoDay from '../componentes/photoDay.jsx'
import PhotoPast from '../componentes/photoPast.jsx'

const APD = () => {
    const {setMenucolor} = useContext(MenuContext);
    const [today, setToday] = useState(true)

    useEffect(()=>{setMenucolor("#298CDD 60%, #9DD149")},[])
    
    const toggle = (e) => {
        e.preventDefault();
        setToday(!today);
    }

    return(
        <div className={styles.APD}>
            <div className={styles.toggle}>
                <label>
                    {today ? "Você está conferindo a foto astronômica do dia, clique no botão a seguir para conferir fotos de dias anteriores: ": "Voltar para a foto astronômica do dia atual: "}
                </label>
                <button onClick={toggle} className={styles.toggleButton} style={{backgroundImage: `${today ? 'url(../src/assets/next.png)': 'url(../src/assets/back.png)'}`}} />
            </div>
            <div className={styles.sep} style={{width: `${today? "95%" : "40%"}`}}></div>
            {today? <PhotoDay photo={"APD"} /> : <PhotoPast />}
        </div>
    )
}

export default APD