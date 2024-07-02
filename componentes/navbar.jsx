import styles from '../modulescss/navbar.module.css'
import { useState, useContext } from 'react'
import { FaSearch } from "react-icons/fa"
import { GiTrackedRobot } from "react-icons/gi"
import { GiAstronautHelmet } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { MenuContext } from '../context/MenuContext';

function Navbar() {
    const [menuActive, setMenuActive] = useState("70px");

    const {menucolor} = useContext(MenuContext);

    function toggleMenu(){
        setMenuActive(menuActive === "70px"? "300px": "70px")
    }
    
    return (
        <ul className={styles.bar} style={{width: menuActive, backgroundImage: `linear-gradient(${menucolor})`}}>
            <IoMdMenu className={styles.menu} style={{transform: `rotate(${menuActive==="70px"? "0deg": "90deg"})`}} onClick={toggleMenu}/> <label className={styles.menuText}>Ao Infinito e Além</label>
            <li key='home'>
                <Link to="/" className={styles.pages} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                    <FaHome className={styles.icon}/> <label>Nossa querida página inicial</label>
                </Link>
            </li>
            <div className={styles.sep}></div>
            <li key='search' >
                <Link to="/search" className={styles.pages} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <FaSearch className={styles.icon}/> <label>Procure por algum assunto astronômico</label>
                </Link>
            </li>
            <div className={styles.sep}></div>
            <li key='rover'>
                <Link to="/rover" className={styles.pages} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <GiTrackedRobot className={styles.icon}/> <label>Que tal ver umas fotos dos rovers de Marte?</label>
                </Link>
            </li>
            <div className={styles.sep}></div>
            <li key='apd'>
                <Link to="/apd" className={styles.pages} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <GiAstronautHelmet className={styles.icon}/> <label>Bora conferir a foto astronômica do dia</label>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar