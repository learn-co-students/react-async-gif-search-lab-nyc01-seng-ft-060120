import React from 'react'

class GifSearch extends React.Component{

    set = {
        searchValue: ""
    }

    searchHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.props.submitHandler}>
                <input placeholder="Search GIFs" value={this.searchValue} onChange={this.searchHandler}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}


export default GifSearch