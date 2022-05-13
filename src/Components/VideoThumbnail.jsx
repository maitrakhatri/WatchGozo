export function VideoThumbnail({ title, channelName, thumb}) {
    return (
        <div className="video-thumbnail">
            <img class="img-res" src={thumb} />
            <span class="video-title">{title}</span>
            <span class="channel-name">{channelName} <img src="../assets/icons/playlist_add_black_36dp.svg" alt="add to playlist" /></span>
        </div>
    )
}