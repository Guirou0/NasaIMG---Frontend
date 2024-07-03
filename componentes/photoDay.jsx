import { useState, useEffect } from "react";
import styles from "../modulescss/photoDay.module.css";
import axios from "axios";

const API = axios.create({
    baseURL: ""
})

const PhotoDay = ({photo}) => {
    const [apd, setApd] = useState({
        "autor": "Long Xin",
        "data": "21/06/2024",
        "desc": "Stars are forming in Lynds Dark Nebula (LDN) 1251. About 1,000 light-years away and drifting above the plane of our Milky Way galaxy, LDN 1251 is also less appetizingly known as \"The Rotten Fish Nebula.\" The dusty molecular cloud is part of a complex of dark nebulae mapped toward the Cepheus flare region. Across the spectrum, astronomical explorations of the obscuring interstellar clouds reveal energetic shocks and outflows associated with newborn stars, including the telltale reddish glow from scattered Herbig-Haro objects hiding in the image. Distant background galaxies also lurk in the scene, almost buried behind the dusty expanse. This alluring view spans over four full moons on the sky, or 35 light-years at the estimated distance of LDN 1251.",
        "title": "Lynds Dark Nebula 1251",
        "url": "https://apod.nasa.gov/apod/image/2406/LDN1251_2048.png"
    });

     useEffect(() => {
        if (photo != "APD") {
            setApd(photo)
        }
        else {
            API.get("/apd")
            .then((response) => {
                setApd(response.data);
            })
            .catch((error) => {
                alert(error.message);
            })
        }    
    }, []) 

    return(
        <div className={styles.container}>
            <label className={styles.title}>Título: {apd.title}</label>
            <div className={styles.info}>
                <img src={apd.url} alt="APD" className={styles.foto} />
                <div className={styles.text}>
                    {apd.autor && (<label >Copyright: {apd.autor}</label>)}
                    {apd.autor && (<div className={styles.sep}></div>)}
                    <label >Data: {apd.data}</label>
                    <div className={styles.sep}></div>
                    <label>Descrição:</label>
                    <p >{apd.desc}</p>
                </div>
            </div>
        </div>
    )
}

PhotoDay.defaulProps ={
    photo: null,
}

export default PhotoDay