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
}

export const AppContext = createContext<AppContextInterface>({
    userChoice: '',
    setUserChoice: (value: string) => {},
    player1: '',
})

const Application: React.FC<React.ReactNode> = (props) => {
    const [userChoice, setUserChoice] = useState('paper')
    const [player1] = useState('')
    return (
        <AppContext.Provider value={{ userChoice, setUserChoice, player1 }}>
            <Layout />
        </AppContext.Provider>
    )
}

export default Application
