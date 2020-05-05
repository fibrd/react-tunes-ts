import React from 'react'
import { Song } from '../../types'

// styles
import './TunesList.scss'

//children
import TunesSong from './TunesSong'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// props
interface Props {
    songs: Song[]
}

// component
const TunesList = (props: Props) => {
    const { songs } = props

    // template
    return (
        <TransitionGroup component="ul" className="tunes-list">
            {songs.map((song) => (
                <CSSTransition key={song.id} timeout={200} classNames="song">
                    <li key={song.id}>
                        <TunesSong song={song} />
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}

export default TunesList
