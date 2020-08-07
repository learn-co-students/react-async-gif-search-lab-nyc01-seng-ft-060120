import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import '../App.css'

// the App component should render out the GifListContainer component 

class App extends React.Component{
  render(){

    return (
      <div className="App-container">
          < NavBar color='black' title="Giphy Search" />
          < GifListContainer />
      </div>
    )
  }
}

export default App
