import React, { createContext, useContext, useState } from 'react'

interface AppStateContextType {
  modalIsOpen: boolean
  sidebarIsOpen: boolean
  titleBarContent: string
  toggleModal: () => void
  toggleSidebar: () => void
  setTitleBarContent: (content: string) => void
}
const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
)

export const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}
interface AppStateProviderProps {
  children: React.ReactNode
}

export const AppStateProvider = ({
  children,
}: AppStateProviderProps): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [titleBarContent, setTitleBarContent] = useState('')

  const toggleModal = (): void => setModalIsOpen((prevState) => !prevState)
  const toggleSidebar = (): void => setSidebarIsOpen((prevState) => !prevState)

  return (
    <AppStateContext.Provider
      value={{
        modalIsOpen,
        sidebarIsOpen,
        titleBarContent,
        toggleModal,
        toggleSidebar,
        setTitleBarContent,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}
