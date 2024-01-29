import { createContext, useState } from "react"

export const MenuContext = createContext()

function MenuContextProvider({ children }) {
    const [viewMenu, setViewMenu] = useState(false)

    const toggleMenu = () => {
        setViewMenu((prev) => !prev)
    }

    const hideMenu = () => {
        setViewMenu(false)
    }

    return (
        <MenuContext.Provider value={{ viewMenu, toggleMenu, hideMenu }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider
