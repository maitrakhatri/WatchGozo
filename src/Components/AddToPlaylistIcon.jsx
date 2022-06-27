import { usePlaylist } from "../Context";

export function AddToPlaylistIcon({ vid }) {
  const { setShowModal, setTargetVideo } = usePlaylist();

  return (
    <img
      src="../assets/icons/playlist_add_black_36dp.svg"
      alt="add to playlist"
      onClick={() => {
        setShowModal(true);
        setTargetVideo(vid);
      }}
    />
  );
}
