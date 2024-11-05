import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleShowSidebar = () => {
        setShowSidebar(true)
    }

    const handleCloseSidebar = () => {
        setShowSidebar(false)
    }
    return (
        <AppContext.Provider value={{
            showSidebar,
            showModal,
            handleCloseModal,
            handleCloseSidebar,
            handleOpenModal,
            handleShowSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

