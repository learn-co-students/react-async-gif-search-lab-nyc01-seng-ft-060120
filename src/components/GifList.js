import React from 'react';

class GifList extends React.Component {
    state = {  }
    render() { 
        // console.log(this.props.gif.url)
        // let { url } = this.props.gif
        return (  
            <div class="ui segment">
                <ul>
                    {/* <li> */}
                        <img class="ui small image" alt="" src={this.props.gif.images.original.url}/>
                    {/* </li> */}
                </ul>
            </div>
        );
    }
}
 
export default GifList;