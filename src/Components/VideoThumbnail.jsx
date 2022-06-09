export function VideoThumbnail({ title, channelName, thumb}) {
    return (
        <div className="video-thumbnail">
            <img class="img-res" src={thumb} alt="thumbnail"/>
            <span class="video-title">{title}</span>
            <span class="channel-name">{channelName}</span>
        </div>
    )
}