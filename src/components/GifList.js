import React from 'react'

class GifList extends React.Component {
    render(){
        return(
            <div>
                <h2>Gif List</h2>
                <ul>
                    {this.props.gif.map(obj => <li><img src={obj.images.original.url} alt=""/></li> )}
                </ul>
            </div>
        )
    }
}

export default GifList
