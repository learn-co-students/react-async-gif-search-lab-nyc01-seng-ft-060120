import React from 'react'

class GifList extends React.Component{

  render(){
    return(      
      <ul>
        <li><img src={this.props.gif}></img></li>
      </ul>
    )
  }
}

export default GifList