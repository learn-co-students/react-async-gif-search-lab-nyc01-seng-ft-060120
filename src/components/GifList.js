import React from 'react'


class GifList extends React.Component {
    

    render() {

        return (
           
            <li>
                 <img alt="" src={this.props.eachGif.images.original.url}/>
            </li>
        )
    }
}


export default GifList