import { createContext, useContext } from 'react'

// TS type
export type AppContextType = {
    userChoice: string
    setUserChoice: (c: string) => void
    // player2Choice: string
    // winner: string
}

export const AppContext = createContext<AppContextType>({
    userChoice: 'paper',
    setUserChoice: () => {},
    // player2Choice: 'paper',
    // winner: 'none',
})

export const useAppContext = () => useContext(AppContext)
