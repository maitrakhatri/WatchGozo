import axios from "axios";
import { createContext, useContext } from "react"
import { useState } from "react";
import { token } from "./token-context"

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

    const [myPlaylists, setMyPlaylists] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState("");
    const [targetVideo, setTargetVideo] = useState({});
    const [specificPlaylist, setSpecificPlaylist] = useState({})

    const getAllPlaylists = async () => {
        try {
            const response = await axios.get("/api/user/playlists", {
                headers: {
                    authorization: token
                }
            });
            setMyPlaylists(response.data.playlists)
        }
        catch (error) {
            console.log(error)
        }
    }

    const createNewPlaylist = async (playlistName) => {
        try {
            const response = await axios.post("/api/user/playlists", {
                playlist: {
                    title: playlistName
                }
            }, {
                headers: {
                    authorization: token
                }
            });
            setMyPlaylists(response.data.playlists)
        }
        catch (error) {
            console.log(error)
        }
    }

    const deletePlaylist = async (playlistId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
                headers: {
                    authorization: token
                }
            });
            setMyPlaylists(response.data.playlists)
        }
        catch (error) {
            console.log(error)
        }
    }

    const getSpecificPlaylists = async (playlistId) => {
        try {
            const response = await axios.get(`/api/user/playlists/${playlistId}`, {
                headers: {
                    authorization: token
                }
            });
            setSpecificPlaylist(response.data.playlist)
        }
        catch (error) {
            console.log(error)
        }
    }

    const addVideoToPlaylist = async (playlistId, video) => {
        try {
            const response = await axios.post(`/api/user/playlists/${playlistId}`, { video }, {
                headers: {
                    authorization: token
                }
            });
            setMyPlaylists(() => myPlaylists.map((playlist) => playlist._id === playlistId ? response.data.playlist : playlist))
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteVideoFromPlaylist = async (playlistId, videoId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
                headers: {
                    authorization: token
                }
            });
            setMyPlaylists(() => myPlaylists.map((playlist) => playlist._id === playlistId ? response.data.playlist : playlist))
        }
        catch (error) {
            console.log(error)
        }
    }

    return <PlaylistContext.Provider value={{ getAllPlaylists, createNewPlaylist, deletePlaylist, getSpecificPlaylists, addVideoToPlaylist, deleteVideoFromPlaylist, myPlaylists, showModal, setShowModal, newPlaylist, setNewPlaylist, targetVideo, setTargetVideo, specificPlaylist }}>
        {children}
    </PlaylistContext.Provider>
}

const usePlaylist = () => useContext(PlaylistContext);

export { usePlaylist, PlaylistProvider } 