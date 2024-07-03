import { useState } from "react";
import styles from "../modulescss/photoPast.module.css";
import axios from "axios";
import { IoSearchCircleOutline } from "react-icons/io5"
import PhotoDay from './photoDay.jsx'

const API = axios.create({
    baseURL: ""
})


const PhotoPast = () => {
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState([
    {
        "autor": "Marcella Giulia Pace",
        "data": "19/06/2024",
        "desc": "Last April's Full Moon shines through high clouds near the horizon, casting shadows in this garden-at-night skyscape. Along with canine sentinel Sandy watching the garden gate, the wide-angle snapshot also captured the bright Moon's 22 degree ice halo. But June's bright Full Moon will cast shadows too. This month, the Moon's exact full phase occurs at 01:08 UTC June 22. That's a mere 28 hours or so after today's June solstice (at 20:51 UTC June 20), the moment when the Sun reaches its maximum northern declination. Known to some as a Strawberry Moon, June's Full Moon is at its southernmost declination, and of course will create its own 22 degree halos in hazy night skies.",
        "title": "Sandy and the Moon Halo",
        "url": "https://apod.nasa.gov/apod/image/2406/MoonHalo_pace.jpg"
    },
    {
        "data": "20/06/2024",
        "desc": "Returning to science operations on June 14, the Hubble Space Telescope used its new pointing mode to capture this sharp image of spiral galaxy NGC 1546. A member of the Dorado galaxy group, the island universe lies a mere 50 million light-years away. The galactic disk of NGC 1546 is tilted to our line-of-sight, with the yellowish light of the old stars and bluish regions of newly formed stars shining through the galaxy's dust lanes. More distant background galaxies are scattered throughout this Hubble view. Launched in 1990, Hubble has been exploring the cosmos for more than three decades, recently celebrating its 34th anniversary.",
        "title": "Hubble's NGC 1546",
        "url": "https://apod.nasa.gov/apod/image/2406/NGC1546compassHST.jpg"
    },
    {
        "autor": "Long Xin",
        "data": "21/06/2024",
        "desc": "Stars are forming in Lynds Dark Nebula (LDN) 1251. About 1,000 light-years away and drifting above the plane of our Milky Way galaxy, LDN 1251 is also less appetizingly known as \"The Rotten Fish Nebula.\" The dusty molecular cloud is part of a complex of dark nebulae mapped toward the Cepheus flare region. Across the spectrum, astronomical explorations of the obscuring interstellar clouds reveal energetic shocks and outflows associated with newborn stars, including the telltale reddish glow from scattered Herbig-Haro objects hiding in the image. Distant background galaxies also lurk in the scene, almost buried behind the dusty expanse. This alluring view spans over four full moons on the sky, or 35 light-years at the estimated distance of LDN 1251.",
        "title": "Lynds Dark Nebula 1251",
        "url": "https://apod.nasa.gov/apod/image/2406/LDN1251_2048.png"
    },
    {
        "data": "22/06/2024",
        "desc": "What creates Saturn's colors?  The featured picture of Saturn only slightly exaggerates what a human would see if hovering close to the giant ringed world.   The image was taken in 2005 by the robot Cassini spacecraft that orbited Saturn from 2004 to 2017.  Here Saturn's majestic rings appear directly only as a curved line, appearing brown, in part from its infrared glow.  The rings best show their complex structure in the dark shadows they create across the upper part of the planet.   The northern hemisphere of Saturn can appear partly blue for the same reason that Earth's skies can appear blue -- molecules in the cloudless portions of both planet's atmospheres are better at scattering blue light than red.  When looking deep into Saturn's clouds, however, the natural gold hue of Saturn's clouds becomes dominant.   It is not known why southern Saturn does not show the same blue hue -- one hypothesis holds that clouds are higher there.   It is also not known why some of Saturn's clouds are colored gold.",
        "title": "The Colors of Saturn from Cassini",
        "url": "https://apod.nasa.gov/apod/image/2406/SaturnColors_CassiniSchmidt_960.jpg"
    },
    {
        "data": "23/06/2024",
        "desc": "What if we could see back to the beginning of the universe?  We could see galaxies forming.  But what did galaxies look like back then?  These questions took a step forward recently with the release of the analysis of a James Webb Space Telescope (JWST) image that included the most distant object yet discovered.  Most galaxies formed at about 3 billion years after the Big Bang, but some formed earlier. Pictured in the inset box is JADES-GS-z14-0, a faint smudge of a galaxy that formed only 300 million years after the universe started.  In technical terms, this galaxy lies at the record redshift of z=14.32, and so existed when the universe was only one fiftieth of the its present age.  Practically all of the objects in the featured photograph are galaxies.",
        "title": "JADES-GS-z14-0: A New Farthest Object",
        "url": "https://apod.nasa.gov/apod/image/2406/MostDistantGalaxy_Webb_960.jpg"
    },
    {
        "autor": "\nMartin Pugh &  \nRocco Sung\n",
        "data": "24/06/2024",
        "desc": "What is that strange brown ribbon on the sky?  When observing the star cluster NGC 4372, observers frequently take note of an unusual dark streak nearby running about three degrees in length. The streak, actually a long molecular cloud, has become known as the Dark Doodad Nebula.  (Doodad is slang for a thingy or a whatchamacallit.)  Pictured here, the Dark Doodad Nebula sweeps across the center of a rich and colorful starfield.  Its dark color comes from a high concentration of interstellar dust that preferentially scatters visible light.  The globular star cluster NGC 4372 is visible as the fuzzy white spot on the far left, while the bright blue star gamma Muscae is seen to the cluster's upper right. The Dark Doodad Nebula can be found with strong binoculars toward the southern constellation of the Fly (Musca).",
        "title": "The Dark Doodad Nebula",
        "url": "https://apod.nasa.gov/apod/image/2406/Doodad_PughSung_9193.jpg"
    },
    {
        "autor": "\nJeff Dai\n(TWAN); \n Music: \nIbaotu catalog number 771024\n(Used with permission)\n",
        "data": "25/06/2024",
        "desc": "What's happening in the sky this unusual night? Most striking in the featured 4.5-hour 360-degree panoramic video, perhaps, is the pink and purple aurora. That's because this night, encompassing May 11, was famous for its auroral skies around the world. As the night progresses, auroral bands shimmer, the central band of our Milky Way Galaxy rises, and stars shift as the Earth rotates beneath them.  Captured here simultaneously is a rare red band running above the aurora: a SAR arc, seen to change only slightly. The flashing below the horizon is caused by passing cars, while the moving spots in the sky are satellites and airplanes.  The featured video was captured from Xinjiang, China with four separate cameras.",
        "title": "Timelapse: Aurora, SAR, and the Milky Way"
    },
    {
        "data": "26/06/2024",
        "desc": "Jets of material blasting from newborn stars, are captured in this James Webb Space Telescope close-up of the Serpens Nebula. The powerful protostellar outflows are bipolar, twin jets spewing in opposite directions. Their directions are perpendicular to accretion disks formed around the spinning, collapsing stellar infants. In the NIRcam image, the reddish color represents emission from molecular hydrogen and carbon monoxide produced as the jets collide with the surrounding gas and dust. The sharp image shows for the first time that individual outflows detected in the Serpens Nebula are generally aligned along the same direction. That result was expected, but has only now come into clear view with Webb's detailed exploration of the active young star-forming region. Brighter foreground stars exhibit Webb's characteristic diffraction spikes. At the Serpens Nebula's estimated distance of 1,300 light-years, this cosmic close-up frame is about 1 light-year across.",
        "title": "Protostellar Outflows in Serpens",
        "url": "https://apod.nasa.gov/apod/image/2406/STScI-SerpNorth.png"
    },
    {
        "autor": "Dan Bartlett",
        "data": "27/06/2024",
        "desc": "Not a paradox, Comet 13P/Olbers is returning to the inner Solar System after 68 years. The periodic, Halley-type comet will reach its next perihelion or closest approach to the Sun on June 30 and has become a target for binocular viewing low in planet Earth's northern hemisphere night skies. But this sharp telescopic image of 13P is composed of stacked exposures made on the night of June 25. It easily reveals shifting details in the bright comet's torn and tattered ion tail buffeted by the wind from an active Sun, along with a broad, fanned-out dust tail and slightly greenish coma. The frame spans over two degrees across a background of faint stars toward the constellation Lynx.",
        "title": "Comet 13P/Olbers",
        "url": "https://apod.nasa.gov/apod/image/2406/13P_Olbers_2024_06_24_215434PDT_DEBartlett.jpg"
    },
    {
        "autor": "Tunc Tezel",
        "data": "28/06/2024",
        "desc": "Rising opposite the setting Sun, June's Full Moon occurred within about 28 hours of the solstice. The Moon stays close to the Sun's path along the ecliptic plane and so while the solstice Sun climbed high in daytime skies, June's Full Moon remained low that night as seen from northern latitudes. In fact, the Full Moon hugs the horizon in this June 21 rooftop night sky view from Bursa, Turkey, constructed from exposures made every 10 minutes between moonrise and moonset. In 2024 the Moon also reached a major lunar standstill, an extreme in the monthly north-south range of moonrise and moonset caused by the precession of the Moon's orbit over an 18.6 year cycle. As a result, this June solstice Full Moon was at its southernmost moonrise and moonset along the horizon.",
        "title": "A Solstice Moon",
        "url": "https://apod.nasa.gov/apod/image/2406/SolsMoon2024.jpg"
    },
    {
        "data": "29/06/2024",
        "desc": "About 12 seconds into this video, something unusual happens. The Earth begins to rise.  Never seen by humans before, the rise of the Earth over the limb of the Moon occurred about 55.5 years ago and surprised and amazed the crew of Apollo 8. The crew immediately scrambled to take still images of the stunning vista caused by Apollo 8's orbit around the Moon. The featured video is a modern reconstruction of the event as it would have looked were it recorded with a modern movie camera. The colorful orb of our Earth stood out as a familiar icon rising above a distant and unfamiliar moonscape, the whole scene the conceptual reverse of a more familiar moonrise as seen from Earth. To many, the scene also spoke about the unity of humanity: that big blue marble -- that's us -- we all live there. The two-minute video is not time-lapse -- this is the real speed of the Earth rising through the windows of Apollo 8. Seven months and three missions later, Apollo 11 astronauts would not only circle Earth's moon, but land on it.   NASA Administrator Remembers Earthrise Photographer William Anders",
        "title": "Earthrise: A Video Reconstruction"
    },
    {
        "data": "30/06/2024",
        "desc": "What's happened since the universe started? The time spiral shown here features a few notable highlights. At the spiral's center is the Big Bang, the place where time, as we know it, began about 13.8 billion years ago. Within a few billion years atoms formed, then stars formed from atoms, galaxies formed from stars and gas, our Sun formed, soon followed by our Earth, about 4.6 billion years ago.  Life on Earth begins about 3.8 billion years ago, followed by cells, then photosynthesis within a billion years.  About 1.7 billion years ago, multicellular life on Earth began to flourish.  Fish began to swim about 500 million years ago, and mammals began walking on land about 200 million years ago. Humans first appeared only about 6 million years ago, and made the first cities only about 10,000 years ago.  The time spiral illustrated stops there, but human spaceflight might be added, which started only 75 years ago, and useful artificial intelligence began to take hold within only the past few years.   Explore Your Universe: Random APOD Generator",
        "title": "Time Spiral",
        "url": "https://apod.nasa.gov/apod/image/2407/TimeSpiral_Budassi_2500.jpg"
    },
    {
        "data": "01/07/2024",
        "desc": "The clouds may look like an oyster, and the stars like pearls, but look beyond. Near the outskirts of the Small Magellanic Cloud, a satellite galaxy some 200 thousand light-years distant, lies this 5 million year old star cluster NGC 602. Surrounded by its birth shell of gas and dust, star cluster NGC 602 is featured in this stunning Hubble image, augmented in a rollover by images in the X-ray by the Chandra Observatory and in the infrared by Spitzer Telescope. Fantastic ridges and swept back gas strongly suggest that energetic radiation and shock waves from NGC 602's massive young stars have eroded the dusty material and triggered a progression of star formation moving away from the star cluster's center. At the estimated distance of the Small Magellanic Cloud, the featured picture spans about 200 light-years, but a tantalizing assortment of background galaxies are also visible in this sharp view. The background galaxies are hundreds of millions of light-years -- or more -- beyond NGC 602.",
        "title": "NGC 602: Oyster Star Cluster",
        "url": "https://apod.nasa.gov/apod/image/2407/Ngc602_ChandraHubbleSpitzer_3600.jpg"
    },
    {
        "autor": "Michael Sidonio",
        "data": "02/07/2024",
        "desc": "Big, bright, and beautiful, spiral galaxy M83 lies a mere twelve million light-years away, near the southeastern tip of the very long constellation Hydra. About 40,000 light-years across, M83 is known as the Southern Pinwheel for its pronounced spiral arms. But the wealth of reddish star forming regions found near the edges of the arms' thick dust lanes, also suggest another popular moniker for M83, the Thousand-Ruby Galaxy. This new deep telescopic digital image also records the bright galaxy's faint, extended halo. Arcing toward the bottom of the cosmic frame lies a stellar tidal stream, debris drawn from massive M83 by the gravitational disruption of a smaller, merging satellite galaxy. Astronomers David Malin and Brian Hadley found the elusive star stream in the mid 1990s by enhancing photographic plates.",
        "title": "M83: Star Streams and a Thousand Rubies",
        "url": "https://apod.nasa.gov/apod/image/2407/DeepM83ThousandRubyGalaxy.jpg"
    }]);

    const handleSearch = (e) => {
        e.preventDefault();
        setPhotos(['Loading'])
        API.get(`/apd?sd=${search}`).then((response)=>{
            setPhotos(response.data == "NF"? ["NF"]: response.data)
        }).catch((error)=>{
            setPhotos([]);
            alert(error.message);
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
                {photos.map((photo, i)=>(
                    <PhotoDay key={i} photo={photo} />
                ))}
            </ul>)
        }
    }

    return(
        <div className={styles.search}>
            <form className={styles.searchbar} onSubmit={handleSearch}>
                <IoSearchCircleOutline className={styles.searchicon}/>
                <label>Insira a data de início, contando a partir de hoje:</label>
                <input value={search} className={styles.searchinput} type="date" onChange={(e)=>{setSearch(e.target.value)}} required/>
                <input className={styles.submit} type="submit" value="" title="Pesquisar"/>
                {}
            </form>
            {content()}
        </div>
    )
}

export default PhotoPast