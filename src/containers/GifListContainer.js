

// API Key: WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO

// `https://api.giphy.com/v1/gifs/search?q=${YOURQUERYHERE}&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`

import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`)
    .then (resp => resp.json())
    .then(gifsData => this.setState({
      gifs: gifsData.data.slice(3,6)
    }))
  }

  firstThree = () => {
    this.state.gifs.slice(0, 3)
  }
  
  searchHandler = (e) => {
    this.setState({searchValue: e.target.value})
  }

  submitHandler = (string) => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`
    fetch(url)
    .then(response => response.json())
    .then(gifsData => this.setState({
      gifs: gifsData.data.slice(3,6)
    }))
  }

  render(){
    console.log(this.state)
    return(
      <div> 
        <GifSearch searchValue={this.state.searchValue} searchHandler={this.searchHandler} submitHandler={this.submitHandler}/>
        {this.state.gifs.map(gif => <GifList gif={gif.images.original.url}/>)}
      </div>
    )
  }
}

export default GifListContainer