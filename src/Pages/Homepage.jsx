import axios from "axios";
import { useState, useEffect } from "react";
import { Category, Navbar, VideoThumbnail } from "../Components";
import "./CSS/homepage.css"

export function Homepage() {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([])

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
            setVideos((response.data.videos).slice(0, 4));
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
        getVideos();
    }, [])

    return (
        <div className="Homepage">
            <Navbar/>

            <main id="homepage">

                <div id="hero-video">
                    <a href=""><img src="./assets/images/hero.jpg" alt="Moon Knight" class="img-res" /></a>
                </div>

                <h2 className="headings text-gray"> Explore </h2>

                <div className="cat-catlog">
                    {categories.map(({id, categoryName, src}) => {
                        return <Category 
                            key={id} 
                            categoryName={categoryName} 
                            src={src}/>
                    })}
                </div>

                <h2 className="headings text-gray"> Trending </h2>

                <div className="video-listing">
                    {videos.map(({title, channelName, _id}) => {
                        return <VideoThumbnail
                            key={_id} 
                            title={title}  
                            channelName={channelName} 
                            thumb={`https://i.ytimg.com/vi/${_id}/hq720.jpg`} />
                    })}
                </div>
            </main>
        </div>
    )
}