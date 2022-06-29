import { Navbar, PlaylistVideo } from "../Components";
import { useWatchLater } from "../Context/watchLater-context";

export function WatchLater() {
  const { watchLater } = useWatchLater();

  return (
    <div className="Watch-Later">
      <Navbar />

      <main id="homepage">
        <h1 className="text-gray">Watch Later</h1>

        <div className="playlist-videos">
          {watchLater?.map((video) => (
            <PlaylistVideo
              src={`https://i.ytimg.com/vi/${video?._id}/hq720.jpg`}
              title={video?.title}
              channelName={video?.channelName}
              id={video?._id}
              video={video}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
