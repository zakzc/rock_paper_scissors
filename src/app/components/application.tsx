import React from 'react'
import { createContext, useState } from 'react'
// components
import Layout from './layout'

///
type SetNewValue = (newValue: string) => void
interface AppContextInterface {
    userChoice: string
    setUserChoice: SetNewValue
    player1: string
    setPlayer1: SetNewValue
    player2: string
    setPlayer2: SetNewValue
}

export const AppContext = createContext<AppContextInterface>({
    userChoice: '',
    setUserChoice: (value: string) => {},
    player1: '',
    setPlayer1: (value: string) => {},
    player2: '',
    setPlayer2: (value: string) => {},
})

const Application: React.FC<React.ReactNode> = (props) => {
    const [userChoice, setUserChoice] = useState('paper')
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    return (
        <AppContext.Provider value={{ userChoice, setUserChoice, player1, setPlayer1, player2, setPlayer2 }}>
            <Layout />
        </AppContext.Provider>
    )
}

export default Application
