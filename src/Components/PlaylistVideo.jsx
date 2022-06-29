import "../Pages/CSS/playlist-video.css";
import { useHistory, useWatchLater } from "../Context";
import { Link } from "react-router-dom";

export function PlaylistVideo({ src, title, channelName, id, video }) {
  const { removeFromWatchLater } = useWatchLater();
  const { addToHistory } = useHistory();

  return (
    <div className="video">
      <Link to={`/${id}`} onClick={ () => addToHistory(video) }>
        {" "}
        <img className="img=res thumb" src={src} alt={title} />{" "}
      <div className="right">
        <span className="video-title">{title}</span>
        <span className="channel-name">{channelName}</span>
      </div>
      </Link>

      <div className="delete">
        <img
          src="../assets/icons/delete.svg"
          alt="delete from watch later"
          onClick={() => removeFromWatchLater(id)}
        />
      </div>
    </div>
  );
}
