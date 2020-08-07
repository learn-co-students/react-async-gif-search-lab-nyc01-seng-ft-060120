import React from 'react'

class GifSearch extends React.Component{




    render(){
        return(
            <form>
                <input placeholder="Search GIFs" value={this.props.searchValue} onChange={this.props.searchHandler}/>
            </form>
        )
    }
}


export default GifSearch