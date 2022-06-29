import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PlaylistProvider, VideoProvider } from "./Context";
import { HistoryProvider } from "./Context/history-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <HistoryProvider>
          <PlaylistProvider>
            <App />
          </PlaylistProvider>
        </HistoryProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
