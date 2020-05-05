import React, { useState } from 'react'
import axios from 'axios'

// children
import TunesSearchForm from '../components/tunes/TunesSearchForm'
import TunesList from '../components/tunes/TunesList'

// interface
import { Song, SongFromITunes } from '../types'

//component
const Tunes = () => {
    // state
    const [songs, setSongs] = useState([])

    // callback functions
    const handleSearch = (query: string) => {
        axios
            .get(
                `https://itunes.apple.com/search?term=${encodeURI(query)}
                    &limit=5&entity=musicTrack`
            )
            .then((response) => {
                let iTunesSongs = response.data.results
                    .filter((song: SongFromITunes) => song.kind === 'song')
                    .map((song: SongFromITunes) => extractData(song))
                setSongs(iTunesSongs)
            })
            .catch((err) => console.log(err))
    }

    const extractData = ({
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album,
    }: SongFromITunes) => {
        return { id, artist, audioFile, artwork, title, album } as Song
    }

    // template
    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch} />
            <TunesList songs={songs} />
        </article>
    )
}

export default Tunes
