import React from 'react';

class GifSearch extends React.Component {
    state = {  }
    render() { 
        return (  
            <form class="ui form"> 
                <h3>Enter a Search Term: </h3>
                <input placeholder="Search GIFs" value={this.props.searchValue} onChange={this.props.searchHandler} />
            </form>
        );
    }
}
 
export default GifSearch;