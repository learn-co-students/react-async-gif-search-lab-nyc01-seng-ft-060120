import React from 'react'

class GifSearch extends React.Component{

    // typeHandler = (e) =>{
    //     // console.log("in search -- typeHandler", this.props.searchText)

    // }
   
    render(){
       
        return(
            <div>
                <h2>Gif Search</h2>
                <form>
                    <input onChange={this.props.searchText} type="text" name="searchBar" value={this.props.textValue}></input>
                </form>
            </div>
        )
    }
}

export default GifSearch