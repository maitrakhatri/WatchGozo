import { createContext, useContext, useState } from "react"
import axios from "axios"
import { token } from "./token-context"

const WatchLaterContext = createContext()

const WatchLaterProvider = ({ children }) => {

    const [watchLater, setWatchLater] = useState([])

    const getWatchLater = async () => {
        try {
            const response = await axios.get('/api/user/watchlater', {
                headers: {
                    authorization: token
                }
            })
            console.log(response.data.watchlater)
            setWatchLater(response.data.watchlater)
        }
        catch (error) {
            console.log(error)
        }
    }

    const addToWatchLater = async (video) => {
        try {
            const response = await axios.post('/api/user/watchlater', {
                video
            }, {
                headers: {
                    authorization: token
                }
            })
            console.log(response.data.watchlater)
            setWatchLater(response.data.watchlater)
        }
        catch (error) {
            console.log(error)
        }
    }

    const removeFromWatchLater = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
                headers: {
                    authorization: token
                }
            })
            console.log(response.data.watchlater)
            setWatchLater(response.data.watchlater)
        }
        catch (error) {
            console.log(error)
        }
    }

    return <WatchLaterContext.Provider value={{ getWatchLater, addToWatchLater, removeFromWatchLater, watchLater }}>
        {children}
    </WatchLaterContext.Provider>
}

const useWatchLater = () => useContext(WatchLaterContext)

export { useWatchLater, WatchLaterProvider }