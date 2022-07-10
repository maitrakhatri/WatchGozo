import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { useAuth, useToast, useToken } from "."

const LikeContext = createContext()

const LikeProvider = ({ children }) => {

    const [likedVideos, setLikedVideos] = useState([])
    const { setShowToast, setToastTitle } = useToast()
    const { token } = useToken()
    const { isLoggedIn } = useAuth()

    const addToLikedVideos = async (video) => {
        if (isLoggedIn) {
            try {
                const response = await axios.post("/api/user/likes", {
                    video
                }, {
                    headers: {
                        authorization: token
                    }
                })
                setLikedVideos(response.data.likes)
                setToastTitle("Added to Liked Videos")
                setShowToast(true)
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            setToastTitle("You need to Login")
            setShowToast(true)
        }
    }

    const removeFromLikedVideos = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/likes/${videoId}`, {
                headers: {
                    authorization: token
                }
            })
            setLikedVideos(response.data.likes)
            setToastTitle("Removed from Liked Videos")
            setShowToast(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getLikedVideos = async () => {
            if (isLoggedIn) {
                try {
                    const response = await axios.get("/api/user/likes", {
                        headers: {
                            authorization: token
                        }
                    })
                    setLikedVideos(response.data.likes)
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        
        getLikedVideos()
    }, [isLoggedIn, token])

    return <LikeContext.Provider value={{ addToLikedVideos, removeFromLikedVideos, likedVideos }}>
        {children}
    </LikeContext.Provider>
}

const useLike = () => useContext(LikeContext)

export { useLike, LikeProvider }