import "./App.css";
import {  Homepage, VideoListingPage, SingleVideoPage } from "./Pages";
import { Routes, Route } from "react-router-dom"
import { useHistory } from "./Context/history-context";

function App() {

  // const { getHistory } = useHistory();

  // getHistory()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/explore" element={<VideoListingPage/>} />
        <Route path="/:videoId" element={<SingleVideoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
