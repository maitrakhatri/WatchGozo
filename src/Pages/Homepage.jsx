import { useState, useEffect } from "react";
import { Category, Navbar, VideoThumbnail } from "../Components";
import { useVideo } from "../Context";
import "./CSS/homepage.css";
import { Link } from "react-router-dom"

export function Homepage() {
  const { categories, videos } = useVideo();

  const [trendingVideos, setTrendingVideos] = useState([]);

  useEffect(() => {
    setTrendingVideos(videos.slice(0, 4));
  }, [videos]);

  useEffect(() => {
    document.title = "Home | WatchGozo";
  }, []);

  return (
    <div className="Homepage">
      <Navbar />

      <main id="homepage">
        <div id="hero-video">
          <Link to="/watch=Al1jCxSzxcY">
            <img
              src="./assets/images/hero.jpg"
              alt="Moon Knight"
              class="img-res"
            />
          </Link>
        </div>

        <h2 className="headings text-gray"> Explore </h2>

        <div className="cat-catlog">
          {categories.map(({ id, categoryName, src }) => {
            return <Category key={id} categoryName={categoryName} src={src} />;
          })}
        </div>

        <h2 className="headings text-gray"> Trending </h2>

        <div className="video-listing">
          {trendingVideos.map((video) => {
            return (
              <VideoThumbnail
                key={video._id}
                title={video.title}
                channelName={video.channelName}
                vid={video}
                thumb={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
