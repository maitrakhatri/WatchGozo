import { usePlaylist } from "../Context";

export function AddToPlaylist() {
  const {
    myPlaylists,
    setShowModal,
    newPlaylist,
    setNewPlaylist,
    createNewPlaylist,
    targetVideo,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
  } = usePlaylist();

  const addingToPlaylist = (e) => {
    if (e.key === "Enter") {
      createNewPlaylist(newPlaylist);
      setNewPlaylist("");
    }
  };

  const togglePlaylist = (e, targetVideo) => {
    if (e.target.checked) {
      addVideoToPlaylist(e.target.id, targetVideo);
    }
    if (!e.target.checked) {
      deleteVideoFromPlaylist(e.target.id, targetVideo._id);
    }
  };

  const isInPlaylist = (targetVideo, playlistId) => {
    const thisPlaylist = myPlaylists.find((item) => item._id === playlistId);
    if (thisPlaylist?.videos.some((item) => item._id === targetVideo._id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="add-to-playlist shadow">
      <h6>Add to Playlist</h6>
      <img
        src="../../assets/icons/close.svg"
        id="close"
        alt="close"
        onClick={() => setShowModal(false)}
      />
      <ul>
        {myPlaylists.map((playlist) => {
          return (
            <li key={playlist._id}>
              <input
                id={playlist._id}
                type="checkbox"
                name="playlist"
                value={playlist.title}
                checked={isInPlaylist(targetVideo, playlist._id)}
                onChange={(e) => {
                  togglePlaylist(e, targetVideo);
                }}
              />{" "}
              {playlist.title}{" "}
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        id="new-playlist"
        placeholder="Creat new Playlist"
        value={newPlaylist}
        onChange={(e) => setNewPlaylist(e.target.value)}
        onKeyPress={(e) => addingToPlaylist(e)}
      />
    </div>
  );
}
