import React from 'react'

class GifSearch extends React.Component{

   state = {
       text: ""
   }

   searchText = (e) =>{
    this.setState({text: e.target.value})
    }

    render(){
       
        return(
            <div className="gifSearch" >
                <h2 className="sectionTitle">Gif Search</h2>
                <form onSubmit={this.props.submitHandler}>
                    <input onChange={this.searchText} type="text" name="searchBar" value={this.state.text}></input>
                    <input type="submit" value="search"></input>
                </form>
            </div>
        )
    }
}

export default GifSearch

