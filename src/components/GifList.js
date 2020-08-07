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

// {this.props.gif.map(gif => <li>gif</li>)}

 // console.log("in container", this.state.gif.map(obj => obj.images.original.url))
//  {console.log("in gif list", this.props.gif.map(obj => <li><img src={obj.images.original.url} alt=""/></li>))}