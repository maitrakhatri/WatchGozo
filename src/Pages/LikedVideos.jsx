import { Navbar, PlaylistVideo } from "../Components";
import { useLike } from "../Context";
import { useEffect } from "react";

export function LikedVideos() {
  const { likedVideos } = useLike();

  useEffect(() => {
    document.title = "Liked Videos | WatchGozo"
  },[])

  return (
    <div className="Watch-Later">
      <Navbar />

      <main id="homepage">
        <h1 className="text-gray">Liked Videos</h1>

        <div className="playlist-videos">
          {likedVideos?.map((video) => (
            <PlaylistVideo
              src={`https://i.ytimg.com/vi/${video?._id}/hq720.jpg`}
              title={video?.title}
              channelName={video?.channelName}
              id={video?._id}
              video={video}
              playlistType="likedvideos"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
