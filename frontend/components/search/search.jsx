import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = (props) => {
    const search = <FontAwesomeIcon icon={faSearch} />

    
    return(
        <div className="search-bar-div">
            <form action="/"
                method="get">
                <input id="header-nav-searchbar" type="text" placeholder="Search" name="s"/>
                <button type="submit" id="icon-search">{search}</button>
            </form>
        </div>
    )
}

export default Search