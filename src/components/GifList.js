import React from 'react'

function gifList(props){
    return(
        <li><img src={props.gif.images.original.url}/></li>
        
    )
}

export default gifList 