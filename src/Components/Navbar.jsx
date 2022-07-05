import { Link } from "react-router-dom";
import { useAuth } from "../Context";

export function Navbar() {

  const { isLoggedIn, logOutHandler } = useAuth()

  return (
    <nav className="navbar bg-yellow">
      <div className="navbar-header">
        <Link to="/">
          <p className="navbar-header-title text-l text-gray">WatchGozo</p>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/explore">
          <p className="category-chip text-gray">Explore</p>
        </Link>
        <Link to="/watchlater">
          <img
            src="./assets/icons/watch_later_white_36dp.svg"
            alt="watch later"
          />
        </Link>
        <Link to="/playlists">
          <img
            src="./assets/icons/playlist_play_white_36dp.svg"
            alt="playlist"
          />
        </Link>
        <Link to="/history">
          <img src="./assets/icons/history_white_36dp.svg" alt="history" />
        </Link>
        {isLoggedIn ? (
          <Link to="/">
            <button
              className="btn btn-lightblue"
              onClick={() => {
                logOutHandler();
              }}
            >
              Log Out
            </button>{" "}
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-lightblue">Log In</button>{" "}
          </Link>
        )}
      </div>
    </nav>
  );
}
