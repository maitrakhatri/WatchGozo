import axios from "axios";
import { createContext, useContext, useState } from "react";
import { encodedToken } from "./token-context";

const HistoryContext = createContext();

const HistoryProvider = ({children}) => {

    const [history, setHistory] = useState([])

    const getHistory = async () => {
        const response = await axios.get('/api/user/history', {
            authorization: encodedToken
        });
        setHistory(response.data.history)
        console.log(response)

    }

    <HistoryContext.Provider value={{ getHistory }}>
        {children}
    </HistoryContext.Provider>
}

const useHistory = () => useContext(HistoryContext)

export { HistoryProvider, useHistory }