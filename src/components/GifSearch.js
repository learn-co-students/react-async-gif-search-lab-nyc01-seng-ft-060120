import React from 'react'

class GifSearch extends React.Component{

    state = {
        searchValue: ""
    }
    searchHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }



    render(){
        return(
        <form onSubmit={this.props.submitHandler}>
            <input placeholder="search for GIF" value={this.searchValue} onChange={this.searchHandler}/>
            <input type="submit" value="Find Gif"/>
        </form>
        )
    }
}

export default GifSearch