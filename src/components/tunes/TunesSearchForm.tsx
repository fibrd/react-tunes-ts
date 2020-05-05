import React, { useState, ChangeEvent, FormEvent } from 'react'

// styles
import './TunesSearchForm.scss'

// props
interface Props {}

// component
const TunesSearchForm = (props: Props) => {
    // state
    const [query, setQuery] = useState('')

    // input element
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // const newSong = {
        //     id: Math.max(...songs.map((s) => s.id)) + 1,
        //     artist: query,
        //     album: query,
        // }
        // setSongs([...songs, newSong])
    }

    // template
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleInput}
                className="search"
            />
        </form>
    )
}

export default TunesSearchForm
