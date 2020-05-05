import React from 'react'
import { Song } from '../../types'
import { truncate } from 'lodash-es'

// styles
import './TunesSong.scss'

// props
interface Props {
    song: Song
}

// component
const TunesSong = (props: Props) => {
    const { song } = props

    // helper functions
    const shorten = (str: string, len = 55): string => {
        return truncate(str, { length: len })
    }

    const songify = (song: Song): string => {
        const newTitle = song.artist + ' - ' + song.title
        return shorten(newTitle, 100)
    }

    // template
    return (
        <article className="song">
            <div className="inside">
                <h2>{songify(song)}</h2>
                <div className="player">
                    {song.artwork && <img src={song.artwork} alt="album art" />}

                    <audio src={song.audioFile} controls></audio>
                </div>
            </div>
            <footer className="meta">{shorten(song.album)}</footer>
        </article>
    )
}

export default TunesSong
