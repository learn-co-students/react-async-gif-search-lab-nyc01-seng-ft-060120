

// API Key: WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO

// `https://api.giphy.com/v1/gifs/search?q=${YOURQUERYHERE}&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`

import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: [],
  }

  componentDidMount(){
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`)
    .then (resp => resp.json())
    .then(gifsData => this.setState({
      gifs: gifsData.data.slice(3,6)
    }))
  }

  submitFetch = (userInput) => {
    console.log(userInput)
    let url = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`
    fetch(url)
    .then(response => response.json())
    .then(gifsData => this.setState({
      gifs: gifsData.data.slice(3,6)
    }))
  }

  render(){
    return(
      <div> 
        <GifSearch submitFetch={this.submitFetch}/>
        {this.state.gifs.map(gif => <GifList gif={gif.images.original.url}/>)}
      </div>
    )
  }
}

export default GifListContainer