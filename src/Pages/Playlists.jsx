import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, PlaylistIcon } from "../Components";
import { useLike, usePlaylist, useWatchLater } from "../Context";
import "./CSS/playlists.css";

export function Playlists() {
  const { likedVideos } = useLike();
  const { watchLater } = useWatchLater();
  const { myPlaylists } = usePlaylist();

  useEffect(() => {
    document.title = "Playlists | WatchGozo"
  },[])

  return (
    <div className="playlist-page">
      <Navbar />
      <main id="homepage">
        <h1 className="text-gray">Your Playlists</h1>

        <div className="playlist-listing">
          <Link to={`/liked-videos`}>
            <PlaylistIcon title="Liked Videos" number={likedVideos?.length} />{" "}
          </Link>
          <Link to="/watchlater">
            <PlaylistIcon title="Watch Later" number={watchLater?.length} />
          </Link>

          {myPlaylists?.map((playlist) => (
            <Link to={`/playlists/${playlist.title}`}>
              {" "}
              <PlaylistIcon
                title={playlist?.title}
                number={playlist?.videos?.length}
              />{" "}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
