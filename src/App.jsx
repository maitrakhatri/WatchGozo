import { useEffect } from "react";
import "./App.css";
import { usePlaylist } from "./Context";
import { VideoListingPage } from "./Pages"

function App() {

  const {getAllPlaylists, createNewPlaylist, deletePlaylist, getSpecificPlaylists, addVideoToPlaylist, deleteVideoFromPlaylist} = usePlaylist()

  const video = {
    _id: "U-BM-FZH0Ik",
    title: "Warner Brothers will Delete Superman and Batman 😨 || Men of culture 6",
    channelName: "Men of culture",
    link: function () {
      return `https://www.youtube.com/watch?v=${this._id}`;
    },
    thumb: function () {
      return `https://i.ytimg.com/vi/${this._id}/hq720.jpg`
    },
    categoryName: "Podcast",
  }

  const video2 = {
    _id: "Al1jCxSzxcY",
    title: "Moon Knight Episode 1 Breakdown in Hindi | DesiNerd",
    channelName: "DesiNerd",
    link: function () {
      return `https://www.youtube.com/watch?v=${this._id}`;
    },
    thumb: function () {
      return `https://i.ytimg.com/vi/${this._id}/hq720.jpg`
    },
    categoryName: "Breakdown",
  }
  return (
    <div className="App">
      <button onClick={() => createNewPlaylist("Watch Later")}>Create Playlist</button>
      <button onClick={() => addVideoToPlaylist("779cba32-b053-4694-92fd-e255651ff9c2", video)}>Add Video</button>
      {/* <VideoListingPage/> */}
    </div>
  );
}

export default App;
