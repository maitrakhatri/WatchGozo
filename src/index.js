import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { LikeProvider, PlaylistProvider, VideoProvider } from "./Context";
import { HistoryProvider } from "./Context/history-context";
import { WatchLaterProvider } from "./Context/watchLater-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <LikeProvider>
          <WatchLaterProvider>
            <HistoryProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </HistoryProvider>
          </WatchLaterProvider>
        </LikeProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
