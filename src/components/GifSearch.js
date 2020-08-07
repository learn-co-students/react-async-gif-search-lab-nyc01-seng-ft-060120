import React from 'react';

function GifSearch(props) {
    return (
        <form>
        <input placeholder="search for a gif" value={props.searchValue} onChange={props.searchHandler} />
    </form>
    )
}

export default GifSearch