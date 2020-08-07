import React from 'react';


class GifSearch extends React.Component {
    state = {  }
    render() { 
        return (  
            <form class="ui form"> 
                <input placeholder="Search.. " value={this.props.searchValue} onChange={this.props.searchHandler} />
            </form>
        );
    }
}
 
export default GifSearch;