import React from 'react'

class GifSearch extends React.Component {

  state = {
    searchValue: ""
  }

  changeHandler = (e) => {
    this.setState({
        searchValue: e.target.value
    })
    console.log(e.target.value)
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitFetch(this.state.searchValue)
    this.setState({searchValue: ""})
  }

  render(){
    return(
      <div>
        <h3>Enter a Search Term:</h3>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.searchValue} onChange={this.changeHandler}/>
          <input type="submit" value="Find Gifs"/>
        </form>
        <br></br>
      </div>
    )
  }
}

export default GifSearch