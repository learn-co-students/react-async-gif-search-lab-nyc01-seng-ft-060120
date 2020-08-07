import React from 'react';
import GifList from '../components/GifList';

class FavesContainer extends React.Component {
    render() { 
        console.log(this.props.faves(this.props.gifObj))
        return (  
            <div>
                <h3>Faves:</h3>
                {/* {this.props.faves.image} */}
            </div>
        );
    }
}
 
export default FavesContainer;