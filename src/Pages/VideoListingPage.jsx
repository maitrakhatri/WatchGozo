import { AddToPlaylist, Navbar, VideoThumbnail } from "../Components";
import axios from "axios";
import { useState, useEffect } from "react";
import { usePlaylist } from "../Context";

export function VideoListingPage() {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredVideos, setFilteredVideos] = useState(videos);

    const { showModal } = usePlaylist();

    const getCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategories(response.data.categories);
        } 
        catch (error) {
            console.log(error);
        }
    }

    const getVideos = async () => {
        try {
            const response = await axios.get("/api/videos");
            setVideos(response.data.videos);
        } 
        catch (error) {
            console.log(error);
        }
    }

    const filter = () => {
        if(selectedCategory === "All") {
            setFilteredVideos(videos)
        }
        else{
            setFilteredVideos(() => videos.filter((item) => item.categoryName === selectedCategory))
            console.log(filteredVideos)
        }
    }

    useEffect(() => {
        getCategories();
        getVideos();
    }, [])

    useEffect(() => {
        setFilteredVideos(videos)
    }, [videos])

    useEffect(() => {
        filter();
    }, [selectedCategory])

    return(
        <div className="video-listing-page">
            <Navbar/>
            <main id="homepage">

                <div className="category-tab">
                    <span className={`category-chip text-center ${selectedCategory === "All" ? "selected" : ""}`} value="All" onClick={(e) => setSelectedCategory(e.target.innerText) }>All</span>
                    {categories.map(({categoryName, id}) => {
                        return <span 
                            key={id} 
                            className={`category-chip text-center ${selectedCategory === categoryName ? "selected" : ""}`}
                            onClick={(e) => setSelectedCategory(e.target.innerText)} >{categoryName}</span>
                    })}
                </div>

                <h1 className="text-gray">All Videos</h1>

                {showModal && <AddToPlaylist/>}

                <div className="video-listing">

                    {filteredVideos.map((video) => {
                        return <VideoThumbnail
                            key={video._id}
                            vid={video}
                            title={video.title}  
                            channelName={video.channelName} 
                            thumb={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`} />
                    })}
                </div>
            </main>
        </div>
    )
}