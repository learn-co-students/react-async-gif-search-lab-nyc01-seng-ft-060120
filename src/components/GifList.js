import React from 'react'

function GifList(props) {
    console.log(props)
    const gifs = props.gifs.map(gif => <li><img key={gif.id} alt={gif.name} src={gif.images.original.url}/></li>)
    return (
        <div>
            <ul>
                {/* <li> <img alt="" src={props.gif.images.original.url} /> </li> */}
                {gifs}
            </ul>
        </div>
    )
}

export default GifList;