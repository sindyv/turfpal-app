import { useState } from "react"

const useToggleMenu = () => {
    const [viewMenu, setViewMenu] = useState(false)

    const toggleMenu = () => {
        setViewMenu((prev) => !prev)
    }

    const hideMenu = () => {
        setViewMenu(false)
    }

    return { viewMenu, toggleMenu, hideMenu }
}

export default useToggleMenu
