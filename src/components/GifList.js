import React from 'react';

class GifList extends React.Component {
    state = {  }

    handleClick = () => {

    }

    render() { 
        console.log(this.props.gif.images.original.url)
        // let { url } = this.props.gif
        return (  
            <div class="ui segment">
                <ul>
                    {/* <li> */}
                        <img class="ui small image" alt="" src={this.props.gif.images.original.url}/>
                        <button type="ui button" onClick={this.handleClick}>Like</button>
                    {/* </li> */}
                </ul>
            </div>
        );
    }
}
 
export default GifList;