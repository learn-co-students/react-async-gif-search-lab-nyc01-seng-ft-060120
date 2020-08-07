

// API Key: WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO

// `https://api.giphy.com/v1/gifs/search?q=${YOURQUERYHERE}&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`

import React from 'react'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  componentDidMount(){
    fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WF7vexSt2wCvEPeEXNKhxVZx8iwnayCO&rating=g`)
    .then (resp => resp.json())
    .then(gifsData => this.setState({
      gifs: gifsData.data
    }))
  }

  render(){
    console.log(this.state.gifs)
    return(
      <div> 
        <GifList />
      </div>
    )
  }
}

export default GifListContainer