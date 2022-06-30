import "../Pages/CSS/playlist-video.css";
import { useHistory } from "../Context";
import { Link } from "react-router-dom";
import { DeleteIcon } from "./DeleteIcon";

export function PlaylistVideo({
  src,
  title,
  channelName,
  id,
  video,
  playlistType,
  playlistId,
}) {
  const { addToHistory } = useHistory();

  return (
    <div className="video">
      <Link to={`/watch=${id}`} onClick={() => addToHistory(video)}>
        {" "}
        <img className="img=res thumb" src={src} alt={title} />{" "}
        <div className="right">
          <span className="video-title">{title}</span>
          <span className="channel-name">{channelName}</span>
        </div>
      </Link>
      <DeleteIcon
        playlistType={playlistType}
        playlistId={playlistId}
        videoId={id}
      />
    </div>
  );
}
