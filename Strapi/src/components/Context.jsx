import { createContext, useState, useContext } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [pageId, setPageId] = useState(null)
    const openModal =() => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <AppContext.Provider value={{
            isModalOpen, openModal, closeModal,
            pageId, setPageId
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}