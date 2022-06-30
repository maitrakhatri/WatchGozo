import "./App.css";
import {
  Homepage,
  VideoListingPage,
  SingleVideoPage,
  History,
  WatchLater,
  Playlists,
  LikedVideos,
  SpecificPlaylist,
} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { useToast } from "./Context";
import { Toast } from "./Components";

function App() {

  const { showToast, toastTitle } = useToast();

  return (
    <div className="App">

      {showToast && <Toast title={toastTitle} />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<VideoListingPage />} />
        <Route path="/watch=:videoId" element={<SingleVideoPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route
          path="/playlists/:playlistTitle"
          element={<SpecificPlaylist />}
        />
      </Routes>
    </div>
  );
}

export default App;
