import { useEffect, useContext } from "react"

import { MenuContext } from "../context/MenuContext"

const APD = () => {
    const {setMenucolor} = useContext(MenuContext);

    useEffect(()=>{setMenucolor("#298CDD 60%, #9DD149")},[])

    return(
        <>

        </>
    )
}

export default APD