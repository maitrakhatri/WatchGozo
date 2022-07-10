import {
  Navbar,
  AddToPlaylistIcon,
  AddToPlaylistModal,
  AddToWatchLaterIcon,
  LikeIcon,
} from "../Components";
import "./CSS/single-video-page.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePlaylist } from "../Context";

export function SingleVideoPage() {
  const { videoId } = useParams();
  const [allVideos, setAllVideos] = useState([]);
  const [ourVideo, setOurVideo] = useState({});

  const { showModal } = usePlaylist();

  const getVideos = async () => {
    try {
      const response = await axios.get("/api/videos");
      setAllVideos(response.data.videos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setOurVideo(allVideos.find((item) => item._id === videoId));
  }, [allVideos, videoId]);

  useEffect(() => {
    document.title = "WatchGozo"
  }, [])

  return (
    <div className="single-video-page">
      <Navbar />

      {showModal && <AddToPlaylistModal />}

      <main id="homepage">
        <div class="video-container">
          <iframe
            class="mainvideo"
            src={`https://www.youtube.com/embed/${ourVideo?._id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class="title-n-action">
            <div class="title">
              <span class="video-title">{ourVideo?.title}</span>
              <span class="channel-name">{ourVideo?.channelName}</span>
            </div>
            <div class="action">
              <LikeIcon video={ourVideo} />

              <AddToPlaylistIcon vid={ourVideo} />

              <AddToWatchLaterIcon video={ourVideo} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
