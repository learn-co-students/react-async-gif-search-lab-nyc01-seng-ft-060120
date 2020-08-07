import React from 'react'

function GifList(props){
    // console.log(props.gif, 'from giflist')
    return (
       <li>
        <img src={props.gif.images.original.url}/>
       </li> 
    )
}

export default GifList