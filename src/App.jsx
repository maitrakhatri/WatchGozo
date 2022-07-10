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
  LogIn,
  SignUp,
  Four0FourPage,
} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { useToast, useToken, useAuth, RequiresAuth, LoggedIn } from "./Context";
import { Toast } from "./Components";
import { useEffect } from "react";

function App() {
  const { showToast, toastTitle } = useToast();

  const { token, setToken } = useToken();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token !== null) {
      setIsLoggedIn(true);
    }
  }, [token, isLoggedIn, setToken, setIsLoggedIn]);

  return (
    <div className="App">
      {showToast && <Toast title={toastTitle} />}

      <Routes>
        <Route path="*" element={ <Four0FourPage /> } />
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<VideoListingPage />} />
        <Route path="/watch=:videoId" element={<SingleVideoPage />} />

        <Route
          path="/history"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <History />
            </RequiresAuth>
          }
        />

        <Route
          path="/watchlater"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <WatchLater />
            </RequiresAuth>
          }
        />

        <Route
          path="/playlists"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <Playlists />
            </RequiresAuth>
          }
        />

        <Route
          path="/liked-videos"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <LikedVideos />
            </RequiresAuth>
          }
        />

        <Route
          path="/playlists/:playlistTitle"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <SpecificPlaylist />
            </RequiresAuth>
          }
        />

        <Route
          path="/login"
          element={
            <LoggedIn isLoggedIn={isLoggedIn}>
              <LogIn />
            </LoggedIn>
          }
        />
        <Route
          path="/signup"
          element={
            <LoggedIn isLoggedIn={isLoggedIn}>
              <SignUp />
            </LoggedIn>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
