import React from 'react';

class GifList extends React.Component {
    render() { 
        console.log(this.props.gif)
        // console.log(this.props.gif.images.original.url)
        // let { url } = this.props.gif
        return (  
            <div style={{display: 'flex', justifyContent: 'center'}} class="ui segment">
                <ul>
                    {/* <li> */}
                    <img class="ui small image" alt="" src={this.props.gif.images.original.url}/>
                    <button type="ui button" onClick={() => this.props.addToFaves(this.props.gif), () => this.props.filteredGifsByFaves(this.props.gif)} >Add to Faves</button>
                    {/* </li> */}
                </ul>
            </div>
        );
    }
}
 
export default GifList;