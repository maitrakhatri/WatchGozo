import { AddToPlaylistIcon, AddToPlaylistModal } from "./index";
import { Link } from "react-router-dom";
import { usePlaylist } from "../Context";

export function VideoThumbnail({ title, channelName, thumb, vid }) {
  const { showModal } = usePlaylist();
  return (
    <div className="video-thumbnail">
      {showModal && <AddToPlaylistModal />}

      <Link to={`/${vid._id}`}>
        <img class="img-res" src={thumb} alt="thumbnail" />
      </Link>
      <span class="video-title">{title}</span>
      <span class="channel-name">
        {channelName}
        <AddToPlaylistIcon vid={vid} />
      </span>
    </div>
  );
}
