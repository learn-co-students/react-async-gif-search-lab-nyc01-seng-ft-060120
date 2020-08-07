import React from 'react'

class GifSearch extends React.Component {
    render(){
        return(
            <div>
                <h3>Enter a Search Term:</h3>
                <form onSubmit={ event => {
                    event.preventDefault()
                    this.props.submitHandler(this.props.searchValue)
                }}>
                    <input type="text" value={this.props.searchValue} onChange={this.props.searchHandler}/>
                    <input type="submit" value="Find Gifs"/>
                </form>
                <br></br>
            </div>
        )
    }
}

export default GifSearch