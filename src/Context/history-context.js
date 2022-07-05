import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useAuth, useToast, useToken } from "."

const HistoryContext = createContext()

const HistoryProvider = ({ children }) => {

    const [myHistory, setMyHistory] = useState()
    const { setShowToast, setToastTitle } = useToast()
    const { token } = useToken()
    const { isLoggedIn } = useAuth()

    const getHistory = async () => {
        try {
            const response = await axios.get('/api/user/history', {
                headers: {
                    authorization: token
                }
            })
            setMyHistory(response.data.history)
        }
        catch (error) {
            console.log(error)
        }
    }

    const addToHistory = async (video) => {
        if (isLoggedIn) {
            try {
                const response = await axios.post("/api/user/history", {
                    video
                }, {
                    headers: {
                        authorization: token
                    }
                })
                setMyHistory(response.data.history)
            }
            catch (error) {
                console.log(error)
            }

        }
    }

    const removeFromHistory = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/history/${videoId}`, {
                headers: {
                    authorization: token
                }
            })
            setMyHistory(response.data.history)
            setToastTitle("Video removed from History")
            setShowToast(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    const clearHistory = async () => {
        try {
            const response = await axios.delete("api/user/history/all", {
                headers: {
                    authorization: token
                }
            })
            setMyHistory(response.data.history)
            setToastTitle("History cleared")
            setShowToast(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    return <HistoryContext.Provider value={{ getHistory, addToHistory, removeFromHistory, clearHistory, myHistory }}>
        {children}
    </HistoryContext.Provider>
}

const useHistory = () => useContext(HistoryContext)

export { useHistory, HistoryProvider }