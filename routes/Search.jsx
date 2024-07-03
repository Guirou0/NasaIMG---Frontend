import { useEffect, useContext, useState } from "react"
import { MenuContext } from "../context/MenuContext"
import styles from '../modulescss/Search.module.css'
import axios from 'axios'
import { IoSearchCircleOutline } from "react-icons/io5"
import Photo from '../componentes/photo.jsx'

const API = axios.create({
    baseURL: "http://localhost:3000"
  })

const Search = () => {
    const {setMenucolor} = useContext(MenuContext);
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState([
        {
            "id": "PIA12235",
            "title": "Nearside of the Moon",
            "data": "2009-09-24T18:00:22Z",
            "url": "https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg"
        },
        {
            "id": "PIA13517",
            "title": "Color of the Moon",
            "data": "2010-09-10T22:24:40Z",
            "url": "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg"
        },
        {
            "id": "PIA12233",
            "title": "Mapping the Moon, Point by Point",
            "data": "2009-09-24T18:00:20Z",
            "url": "https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg"
        },
        {
            "id": "PIA12229",
            "title": "Mineral Mapping the Moon",
            "data": "2009-09-24T18:00:16Z",
            "url": "https://images-assets.nasa.gov/image/PIA12229/PIA12229~thumb.jpg"
        },
        {
            "id": "PIA12228",
            "title": "Cassini Look at Water on the Moon",
            "data": "2009-09-24T18:00:15Z",
            "url": "https://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg"
        },
        {
            "id": "PIA14208",
            "title": "That No Moon...",
            "data": "2011-04-26T15:00:01Z",
            "url": "https://images-assets.nasa.gov/image/PIA14208/PIA14208~thumb.jpg"
        },
        {
            "id": "PIA13516",
            "title": "Moon seen from the East",
            "data": "2010-09-08T22:24:40Z",
            "url": "https://images-assets.nasa.gov/image/PIA13516/PIA13516~thumb.jpg"
        },
        {
            "id": "PIA18906",
            "title": "Sun Shines in High-Energy X-rays",
            "data": "22/12/2014",
            "url": "https://images-assets.nasa.gov/image/PIA18906/PIA18906~thumb.jpg"
        },
        {
            "id": "PIA14729",
            "title": "Mercury Transit Across the Sun",
            "data": "09/05/2016",
            "url": "https://images-assets.nasa.gov/image/PIA14729/PIA14729~thumb.jpg"
        },
        {
            "id": "PIA15179",
            "title": "The Sun Magnetic Field",
            "data": "16/12/2011",
            "url": "https://images-assets.nasa.gov/image/PIA15179/PIA15179~thumb.jpg"
        },
        {
            "id": "PIA17669",
            "title": "Pulses from the Sun",
            "data": "11/02/2014",
            "url": "https://images-assets.nasa.gov/image/PIA17669/PIA17669~thumb.jpg"
        },
        {
            "id": "PIA25628",
            "title": "Three-Telescope View of the Sun",
            "data": "08/02/2023",
            "url": "https://images-assets.nasa.gov/image/PIA25628/PIA25628~thumb.jpg"
        },
        {
            "id": "PIA25431",
            "title": "Comparing Sizes: the Sun and WR 140",
            "data": "11/10/2022",
            "url": "https://images-assets.nasa.gov/image/PIA25431/PIA25431~thumb.jpg"
        }]);

    useEffect(()=>{setMenucolor("#033A92 20%, #FFFFFF 80%, #FA3B1C")},[])
    
    const handleSearch = (e) => {
        e.preventDefault();
        setPhotos(['Loading'])
        API.get(`/search?q=${search}`).then((response)=>{
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
                    <Photo key={photo.id} info={["Título:", "Data de criação:"]} foto={photo} />
                ))}
            </ul>)
        }
    }

    return(
        <div className={styles.search}>
            <form className={styles.searchbar} onSubmit={handleSearch}>
                <IoSearchCircleOutline className={styles.searchicon}/>
                <input value={search} className={styles.searchinput} type="text" placeholder="Insira sua pesquisa em inglês aqui" onChange={(e)=>{setSearch(e.target.value)}} required/>
                <input className={styles.submit} type="submit" value="Pesquisar"/>
                {}
            </form>
            {content()}
        </div>
    )
}

export default Search