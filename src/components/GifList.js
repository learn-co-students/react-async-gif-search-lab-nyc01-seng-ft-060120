import React from 'react'

class GifList extends React.Component{

    render(){
        return(
            <ul>
                {this.props.gifs.map(gif => <li><img src={gif.images.original.url}  /><br/><h1>{gif.title}</h1></li>)} 
            </ul>
        )
    }
}

export default GifList