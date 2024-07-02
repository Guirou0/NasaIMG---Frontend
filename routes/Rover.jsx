import { useEffect, useContext, useState } from "react"
import styles from '../modulescss/Rover.module.css'
import { MenuContext } from "../context/MenuContext"
import axios from 'axios'
import { IoSearchCircleOutline } from "react-icons/io5"

import Photo from "../componentes/photo.jsx"

const API = axios.create({
    baseURL: process.env.API_URL
  })

const Rover = () => {
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState([{
        "id": 102685,
        "title": "Front Hazard Avoidance Camera",
        "data": 1004,
        "url": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG"
    },
    {
        "id": 102686,
        "title": "Front Hazard Avoidance Camera",
        "data": 1004,
        "url": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG"
    },
    {
        "id": 102842,
        "title": "Rear Hazard Avoidance Camera",
        "data": 1004,
        "url": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG"
    },
    {
        "id": 102843,
        "title": "Rear Hazard Avoidance Camera",
        "data": 1004,
        "url": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG"
    }]);

    const {setMenucolor} = useContext(MenuContext);

    useEffect(()=>{setMenucolor("#E77D11, #FDA600")},[])
    
    const handleSearch = (e) => {
        e.preventDefault();
        setPhotos(['Loading'])
        API.get(`/rover?d=${search}`).then((response)=>{
            setPhotos(response.data == "NF"? ["NF"]: response.data)
        })
        setSearch("");
    }
    
    const content = () => {
        if (photos[0]=="NF"){
            return (<div className={styles.notfound}>Não foi possível encontrar nada :(</div>)
        }
        else if (photos[0] == "Loading"){
            return (<div className={styles.loading}></div>)
        }
        else{
            return (<ul className={styles.list}>
                {photos.map((photo)=>(
                    <Photo key={photo.id} info={["Câmera usada:", "Data solar marciana: "]} foto={photo} />
                ))}
            </ul>)
        }
    }

    return(
        <div className={styles.search}>
            <form className={styles.searchbar} onSubmit={handleSearch}>
                <IoSearchCircleOutline className={styles.searchicon}/>
                <label>Insira a data das fotografias a partir do dia 26/11/2011:</label>
                <input value={search} className={styles.searchinput} type="date" onChange={(e)=>{setSearch(e.target.value)}} required/>
                <input className={styles.submit} type="submit" value="Pesquisar"/>
                {}
            </form>
            {content()}
        </div>
    )
}

export default Rover