import { AddToPlaylistIcon } from "./AddToPlaylistIcon";

export function VideoThumbnail({ title, channelName, thumb, vid}) {
    return (
        <div className="video-thumbnail">
            <img class="img-res" src={thumb} />
            <span class="video-title">{title}</span>
            <span class="channel-name">{channelName} <AddToPlaylistIcon vid={vid} /></span>
        </div>
    )
}