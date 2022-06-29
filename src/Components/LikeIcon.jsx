import { useLike } from "../Context";

export function LikeIcon({ video }) {
  const { addToLikedVideos, removeFromLikedVideos, likedVideos } = useLike();

  const isInLikedVideos = (videoId, likedVideos) => {
    if (likedVideos?.some((item) => item._id === videoId)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="like-button">
      {isInLikedVideos(video?._id, likedVideos) ? (
        <img
          src="../assets/icons/liked-icon.svg"
          alt="unlike"
          id="like-icon"
          onClick={() => removeFromLikedVideos(video._id)}
        />
      ) : (
        <img
          src="../assets/icons/like-icon.svg"
          alt="like"
          id="like-icon"
          onClick={() => addToLikedVideos(video)}
        />
      )}
    </div>
  );
}
