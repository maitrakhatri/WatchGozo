import { AddToPlaylistIcon, AddToPlaylistModal, RemoveFromHistoryIcon } from "./index";
import { Link } from "react-router-dom";
import { useHistory, usePlaylist } from "../Context";

export function VideoThumbnail({ title, channelName, thumb, vid, inHistory }) {
  const { showModal } = usePlaylist();
  const { addToHistory } = useHistory()
  return (
    <div className="video-thumbnail">
      {showModal && <AddToPlaylistModal />}

      <Link to={`/${vid._id}`}>
        <img class="img-res" src={thumb} alt="thumbnail" onClick={() => addToHistory(vid)}/>
      </Link>
      <span class="video-title">{title}</span>
      <span class="channel-name">
        {channelName}

        { inHistory ? <RemoveFromHistoryIcon videoId={ vid._id } /> : <AddToPlaylistIcon vid={vid} /> }
        
      </span>
    </div>
  );
}
