

export default function Spotify() {
    return (
        <div className="page-container min-h-screen">
            <h2 className="pb-4">Favourite song and repeated songs on spotify</h2>
            
            <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/3WcC6NH9J77xPEvj1SOL7z?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/37i9dQZF1EpGlQ0q3jwzMZ?utm_source=generator&theme=0" width="100%" height="952" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    )
}