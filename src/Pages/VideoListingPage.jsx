import { useEffect } from "react";
import { AddToPlaylistModal, Navbar, VideoThumbnail } from "../Components";
import { usePlaylist, useVideo } from "../Context";

export function VideoListingPage() {
  const { showModal } = usePlaylist();

  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredVideos,
  } = useVideo();

  useEffect(() => {
    document.title = "Explore | WatchGozo"
  }, [])

  return (
    <div className="video-listing-page">
      <Navbar />
      <main id="homepage">
        <div className="category-tab">
          <span
            className={`category-chip text-center ${
              selectedCategory === "All" ? "selected" : ""
            }`}
            value="All"
            onClick={(e) => setSelectedCategory(e.target.innerText)}
          >
            All
          </span>
          {categories.map(({ categoryName, id }) => {
            return (
              <span
                key={id}
                className={`category-chip text-center ${
                  selectedCategory === categoryName ? "selected" : ""
                }`}
                onClick={(e) => setSelectedCategory(e.target.innerText)}
              >
                {categoryName}
              </span>
            );
          })}
        </div>

        <h1 className="text-gray">All Videos</h1>

        {showModal && <AddToPlaylistModal />}

        <div className="video-listing">
          {filteredVideos.map((video) => {
            return (
              <VideoThumbnail
                key={video._id}
                title={video.title}
                vid={video}
                channelName={video.channelName}
                thumb={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
