import React, { useState } from 'react'

// styles
import './TunesList.scss'

// props
interface Props {}

// component
const TunesList = (props: Props) => {
    // state
    const [songs, setSongs] = useState([
        { id: 1, artist: 'No name', album: 'Affected' },
        { id: 2, artist: 'Miro', album: 'I love me' },
        { id: 3, artist: 'Oasis', album: 'Hello' },
    ])

    // template
    return (
        <ul className="tunes-list">
            {songs.map((song) => (
                <li key={song.id}>{JSON.stringify(song)}</li>
            ))}
        </ul>
    )
}

export default TunesList
