import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {

    const [token, setToken] = useState(null);

    return <TokenContext.Provider value={{ token, setToken }}> {children} </TokenContext.Provider>
}

const useToken = () => useContext(TokenContext);

export { useToken, TokenProvider }