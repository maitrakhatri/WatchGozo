import { useHistory } from "../Context";

export function RemoveFromHistoryIcon({ videoId }) {

  const { removeFromHistory } = useHistory()
  return (
    <img
      src="../assets/icons/delete.svg"
      alt="remove from history"
      onClick={() => { removeFromHistory(videoId) }}
    />
  );
}
