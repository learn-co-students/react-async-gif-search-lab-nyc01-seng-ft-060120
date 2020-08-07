import React from 'react'

class GifSearch extends React.Component{

    state={
        searchTerm: ""
    }


    handleFormChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    searchHandler=(event)=>{
        event.preventDefault(); 
        this.props.formSubmit(this.state.searchTerm)
    }

    render(){
        return(
            <div>
                <form onSubmit={event =>this.searchHandler(event)}>
                    <input
                    type= "text"
                    onChange={event => this.handleFormChange(event)}
                    value={this.searchTerm}
                    name="searchTerm" />
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default GifSearch