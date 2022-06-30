import { useLike, usePlaylist, useWatchLater } from "../Context";

export function DeleteIcon({ playlistType, playlistId, videoId }) {

    const { removeFromWatchLater } = useWatchLater()
    const { removeFromLikedVideos } = useLike()
    const { deleteVideoFromPlaylist } = usePlaylist()

    const getDeleteFunction = (playlistType) => {
        switch(playlistType){
            case "watchlater":
                return removeFromWatchLater(videoId);
            case "likedvideos":
                return removeFromLikedVideos(videoId);
            case "playlist":
                return deleteVideoFromPlaylist(playlistId, videoId);
            default:
                return null
        }
    }
  return (
    <div className="delete">
      <img src="../assets/icons/delete.svg" alt="delete" onClick={ () => getDeleteFunction(playlistType) }/>
    </div>
  );
}
