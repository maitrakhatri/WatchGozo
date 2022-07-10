import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { useAuth, useToast, useToken } from "."

const WatchLaterContext = createContext()

const WatchLaterProvider = ({ children }) => {

    const [watchLater, setWatchLater] = useState([])
    const { setShowToast, setToastTitle } = useToast()
    const { token } = useToken()
    const { isLoggedIn } = useAuth()

    const addToWatchLater = async (video) => {
        if (isLoggedIn) {
            try {
                const response = await axios.post('/api/user/watchlater', {
                    video
                }, {
                    headers: {
                        authorization: token
                    }
                })
                setWatchLater(response.data.watchlater)
                setToastTitle("Added to Watch Later")
                setShowToast(true)
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            setToastTitle("You need to LogIn")
            setShowToast(true)
        }
    }

    const removeFromWatchLater = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
                headers: {
                    authorization: token
                }
            })
            setWatchLater(response.data.watchlater)
            setToastTitle("Removed from Watch Later")
            setShowToast(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getWatchLater = async () => {
            if (isLoggedIn) {
                try {
                    const response = await axios.get('/api/user/watchlater', {
                        headers: {
                            authorization: token
                        }
                    })
                    setWatchLater(response.data.watchlater)
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        getWatchLater()
    }, [isLoggedIn, token])

    return <WatchLaterContext.Provider value={{ addToWatchLater, removeFromWatchLater, watchLater }}>
        {children}
    </WatchLaterContext.Provider>
}

const useWatchLater = () => useContext(WatchLaterContext)

export { useWatchLater, WatchLaterProvider }