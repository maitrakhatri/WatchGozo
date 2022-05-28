import { usePlaylist } from "../Context"

export function AddToPlaylist() {

    const { myPlaylists, setShowModal, newPlaylist, setNewPlaylist, createNewPlaylist, tv, addVideoToPlaylist, deleteVideoFromPlaylist } = usePlaylist();

    const addingToPlaylist = (e) => {
        if(e.key === 'Enter') {
            createNewPlaylist(newPlaylist);
            setNewPlaylist("")
        }
    }

    const togglePlaylist = (e) => {
        if(e.target.checked){
            addVideoToPlaylist(e.target.id, tv);
        }
        else {
            console.log(e.target.id, tv)
            deleteVideoFromPlaylist(e.target.id, tv)
        }
    }

    console.log(myPlaylists)

    return (
        <div className="add-to-playlist shadow">
            <h6>Add to Playlist</h6>
            <img src="../../assets/icons/close.svg" id="close" alt="close" onClick={() => setShowModal(false) } />
            <ul>
                {myPlaylists.map((item) => {
                    return <li key={item._id} ><input id={item._id} type="checkbox" name="playlist" value={item.title} onChange={ (e) => togglePlaylist(e)} /> {item.title} </li>
                })}
            </ul>

            <input type="text" id="new-playlist" placeholder="Creat new Playlist" value={newPlaylist} onChange={(e) => setNewPlaylist(e.target.value)} onKeyPress={ (e) => addingToPlaylist(e) } />
        </div>
    )
}