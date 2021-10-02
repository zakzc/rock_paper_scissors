import React from 'react'
import { createContext, useState } from 'react'
// components
import Layout from './layout'

///
type SetNewValue = (newValue: string) => void
interface AppContextInterface {
    userChoice: any
    setUserChoice: SetNewValue
}

export const AppContext = createContext<AppContextInterface>({ userChoice: '', setUserChoice: (value: string) => {} })

const Application: React.FC<React.ReactNode> = (props) => {
    const [userChoice, setUserChoice] = useState('paper')
    return (
        <AppContext.Provider value={{ userChoice, setUserChoice }}>
            <Layout />
        </AppContext.Provider>
    )
}

export default Application
