import React from 'react'

class GifList extends React.Component {
    render(){
        return(
            <div className="gifList">
                <h2 className="sectionTitle">Gif List</h2>
                <ul className="ulComponent">
                    {this.props.gif.map(obj => <div><li><img src={obj.images.original.url} alt=""/></li><br></br></div> )}
                </ul>
            </div>
        )
    }
}

export default GifList
