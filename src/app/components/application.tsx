import React from 'react'
// state context
import { AppContext } from '../state/context'
import { useAppContext } from '../state/context'
// components
import Layout from './layout'

const Application: React.FC = (): any => {
    //const [userChoice, setUserChoice] = useState<string>(userChoice('rock'))
    const { userChoice } = useAppContext()
    const { setUserChoice } = useAppContext()
    // userChoice: string
    // player2Choice: string
    // winner: string
    return (
        <AppContext.Provider value={{ userChoice, setUserChoice }}>
            <Layout />
        </AppContext.Provider>
    )
}

export default Application
