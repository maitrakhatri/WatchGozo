import { Navbar, AddToPlaylistIcon, AddToPlaylistModal, AddToWatchLaterIcon } from "../Components";
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
              <img
                src="../assets/icons/thumb_up_alt_black_36dp.svg"
                alt="like"
              />

              <AddToPlaylistIcon vid={ourVideo} />

              <AddToWatchLaterIcon/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
