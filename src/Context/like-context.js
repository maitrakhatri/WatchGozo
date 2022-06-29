import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { token } from "./token-context"

const LikeContext = createContext()

const LikeProvider = ({ children }) => {

    const [likedVideos, setLikedVideos] = useState([])

    const getLikedVideos = async () => {
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

    const addToLikedVideos = async (video) => {
        try {
            const response = await axios.post("/api/user/likes", {
                video
            }, {
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

    const removeFromLikedVideos = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/likes/${videoId}`, {
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

    useEffect(() => {
        getLikedVideos()
    }, [])

    return <LikeContext.Provider value={{ getLikedVideos, addToLikedVideos, removeFromLikedVideos, likedVideos }}>
        {children}
    </LikeContext.Provider>
}

const useLike = () => useContext(LikeContext)

export { useLike, LikeProvider }