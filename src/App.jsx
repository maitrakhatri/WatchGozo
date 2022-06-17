import "./App.css";
import { Homepage, VideoListingPage, SingleVideoPage } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<VideoListingPage />} />
        <Route path="/:videoId" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
