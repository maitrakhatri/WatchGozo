import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, PlaylistVideo } from "../Components";
import { usePlaylist } from "../Context";

export function SpecificPlaylist() {
  const { myPlaylists } = usePlaylist();

  const { playlistTitle } = useParams();

  const [ourPlaylist, setOurPlaylist] = useState([]);

  useEffect(() => {
    setOurPlaylist(
      myPlaylists.find((playlist) => playlist.title === playlistTitle)
    );
  }, [playlistTitle, myPlaylists]);

  useEffect(() => {
    document.title = "WatchGozo"
  }, [])

  return (
    <div className="Playlist-Page">
      <Navbar />

      <main id="homepage">
        <h1 className="text-gray">{ourPlaylist?.title}</h1>

        <div className="playlist-videos">
          {ourPlaylist?.videos?.map((video) => (
            <PlaylistVideo
              src={`https://i.ytimg.com/vi/${video?._id}/hq720.jpg`}
              title={video?.title}
              channelName={video?.channelName}
              id={video?._id}
              video={video}
              playlistType="playlist"
              playlistId={ourPlaylist._id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
