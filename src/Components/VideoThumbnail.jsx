import {
  AddToPlaylistIcon,
  AddToPlaylistModal,
  RemoveFromHistoryIcon,
  AddToWatchLaterIcon
} from "./index";
import { Link } from "react-router-dom";
import { useHistory, usePlaylist } from "../Context";

export function VideoThumbnail({ title, channelName, thumb, vid, inHistory }) {
  const { showModal } = usePlaylist();
  const { addToHistory } = useHistory();
  return (
    <div className="video-thumbnail">
      {showModal && <AddToPlaylistModal />}

      <Link to={`/watch=${vid._id}`}>
        <img
          class="img-res"
          src={thumb}
          alt="thumbnail"
          onClick={() => addToHistory(vid)}
        />
      </Link>
      <span class="video-title">{title}</span>
      <span class="channel-name">
        {channelName}

        <div className="icons">
          {inHistory ? (
            <RemoveFromHistoryIcon videoId={vid._id} />
          ) : (
            <>
              <AddToPlaylistIcon vid={vid} />
              <AddToWatchLaterIcon video={vid} />{" "}
            </>
          )}
        </div>
      </span>
    </div>
  );
}
