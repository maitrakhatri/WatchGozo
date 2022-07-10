import { useEffect } from "react";
import { Navbar, VideoThumbnail } from "../Components";
import { useHistory } from "../Context";

export function History() {
  const { myHistory, clearHistory } = useHistory();

  useEffect(() => {
    document.title = "History | WatchGozo"
  },[])

  return (
    <div className="history-page">
      <Navbar />
      <main id="homepage">
        <h1 className="text-gray heading">
          History{" "}
          <button
            className="btn btn-outline-red"
            onClick={() => clearHistory()}
          >
            {" "}
            Clear History
          </button>
        </h1>

        <div className="video-listing">
          {myHistory?.map((video) => (
            <VideoThumbnail
              inHistory={true}
              key={video._id}
              title={video.title}
              vid={video}
              channelName={video.channelName}
              thumb={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
