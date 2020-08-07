import React from 'react'

function GifList(props) {
    console.log(props)
    return (
        <div>
            <ul>
                <li> <img alt="" src={props.gif.images.original.url} /> </li>
            </ul>
        </div>
    )
}

export default GifList;