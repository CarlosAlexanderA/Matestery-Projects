import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClick, setIsClick] = useState(initialState)
    const [screenSize, setscreenSize] = useState(undefined)

    //? cambiar solo el objeto en donde se hizo click
    const handleClick = (clciked) => {
        setIsClick({ ...initialState, [clciked]: true })
    }
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClick,
                setIsClick,
                handleClick,
                screenSize,
                setscreenSize,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
