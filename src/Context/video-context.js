import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const VideoContext = createContext();

const VideoProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredVideos, setFilteredVideos] = useState(videos);

    const getCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategories(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    };

    const getVideos = async () => {
        try {
            const response = await axios.get("/api/videos");
            setVideos(response.data.videos);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
        getVideos();
    }, []);

    return <VideoContext.Provider value={{ categories, setCategories, videos, setVideos, selectedCategory, setSelectedCategory, filteredVideos, setFilteredVideos }}>
        {children}
    </VideoContext.Provider>
}

const useVideo = () => useContext(VideoContext);

export { useVideo, VideoProvider }