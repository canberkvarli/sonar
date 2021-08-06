import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import TrackIndex from '../tracks/track_index';

const Search = ({tracks}) => {
    const search = <FontAwesomeIcon icon={faSearch} />

    return(
        <div>
            <form action="/"
                method="get">
                <input id="header-nav-searchbar" type="text" placeholder="Search" name="s"/>
                <button type="submit" id="icon-search">{search}</button>
            </form>
        </div>
    )
}

export default Search