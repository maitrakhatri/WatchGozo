export function PlaylistIcon({ title, number }) {
  return (
    <div className="playlist">
      <span class="name">
        <img src="../assets/icons/playlist_play_black_36dp.svg" alt={title} />
        {title}
      </span>
      <span class="no">{number}</span>
    </div>
  );
}
