import React, { useRef, ChangeEvent, FormEvent } from 'react'
import { debounce } from 'lodash-es'

// styles
import './TunesSearchForm.scss'

// props
interface Props {
    onSearch: (query: string) => void
}

// component
const TunesSearchForm = (props: Props) => {
    // ref
    const searchInput = useRef<HTMLInputElement>(null)

    // input element
    const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }, 500)

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForMusic()
    }

    // search for music
    const searchForMusic = () => {
        // if (searchInput.current !== null) console.log(searchInput.current.value)
        /**
         * New optional chaining operator
         */
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
    }

    // template
    return (
        <form onSubmit={handleSubmit}>
            <input
                autoFocus
                type="text"
                onChange={handleInput}
                className="search"
                ref={searchInput}
            />
        </form>
    )
}

export default TunesSearchForm
