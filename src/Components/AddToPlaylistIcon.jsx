import { usePlaylist, useToast, useAuth } from "../Context";

export function AddToPlaylistIcon({ vid }) {
  const { setShowModal, setTargetVideo } = usePlaylist();
  const { isLoggedIn } = useAuth();
  const { setShowToast, setToastTitle } = useToast();

  return (
    <img
      src="../assets/icons/playlist_add_black_36dp.svg"
      alt="add to playlist"
      onClick={() => {
        if (isLoggedIn) {
          setShowModal(true);
          setTargetVideo(vid);
        }
        else {
          setToastTitle("You need to Login")
          setShowToast(true)
        }
      }}
    />
  );
}
