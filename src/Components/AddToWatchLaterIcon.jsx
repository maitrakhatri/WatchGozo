import { useWatchLater } from "../Context";

export function AddToWatchLaterIcon({ video }) {
  const { addToWatchLater } = useWatchLater();

  return (
    <img
      id="add-to-watch-later-icon"
      src="../assets/icons/watch_later.svg"
      alt="add to watch later"
      onClick={() => addToWatchLater(video)}
    />
  );
}
