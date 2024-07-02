import { useState, createContext } from "react";


export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [menucolor, setMenucolor] = useState("#5F9EA0, #B0E0E6 60%")

    return <MenuContext.Provider value={{menucolor, setMenucolor}}>{children}</MenuContext.Provider>
}

