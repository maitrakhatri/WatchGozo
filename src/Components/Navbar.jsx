export function Navbar() {
    return (
        <nav className="navbar bg-yellow">
            <div className="navbar-header">
                <a href=""><p className="navbar-header-title text-l text-gray">WatchGozo</p></a>
            </div>
            <div className="navbar-links">
                <a href="./pages/videoListing.html"><p className="category-chip text-gray">Explore</p></a>
                <a href="./Pages/watchLater.html"><img src="./assets/icons/watch_later_white_36dp.svg" alt="watch later" /></a>
                <a href="./Pages/playlistManagement.html"><img src="./assets/icons/playlist_play_white_36dp.svg" alt="playlist" /></a>
                <a href="./Pages/history.html"><img src="./assets/icons/history_white_36dp.svg" alt="history" /></a>
                <a href="./Pages/logIn.html"><button className="btn btn-lightblue">Log In</button></a>
            </div>
        </nav>
    )
}