import React from 'react';

const GifList = (props) => {
    return (
        <React.Fragment>
            {props.gifs.length === 0 ? <h1>LOADING...</h1>
            : <ul>{props.gifs.map(gif => <li><img alt='a gif!' src={gif} /></li>)}</ul>
            }
        </React.Fragment>
    )
}

export default GifList;