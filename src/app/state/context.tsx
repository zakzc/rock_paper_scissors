import { createContext, useState } from 'react'
//
import Layout from '../components/layout'

type SetValue = (value: string) => void
interface AppContextInterface {
    userChoice: string
    setUserChoice: SetValue
}

export const AppContext = createContext<AppContextInterface | null>(null)

const AppContextProvider: React.FC = (props) => {
    const [userChoice, setUserChoice] = useState('rock')
    console.log(userChoice)
    return (
        <AppContext.Provider value={{ userChoice, setUserChoice }}>
            <Layout />
        </AppContext.Provider>
    )
}

export default AppContextProvider
