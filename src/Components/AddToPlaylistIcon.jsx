import { usePlaylist } from "../Context"

export function AddToPlaylistIcon({vid}) {

    const { setShowModal, setTV } = usePlaylist();

    return <img src="../assets/icons/playlist_add_black_36dp.svg" alt="add to playlist" onClick={() => { 
        setShowModal(true)
        setTV(vid)
        console.log(vid)
    }   
    } />
}