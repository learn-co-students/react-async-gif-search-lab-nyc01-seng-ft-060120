import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// temp1.data[0].images.original.url

class GifListContainer extends React.Component {
  

    state = {
        gif: [],
        text: "cat"
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=lFQWQWwOZaVmG9ZbS4POINPRtOHTSir9`)
        .then(resp => resp.json())
        .then(data => {
            let array = data.data.slice(0,3)
            this.setState({ gif: array})
        }) 
    }

    componentDidUpdate(prevState){

        if (prevState.text !== this.state.text){

            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=lFQWQWwOZaVmG9ZbS4POINPRtOHTSir9`)
            .then(resp => resp.json())
            .then(data => {
                let array = data.data.slice(0,3)
                this.setState({ gif: array})
            }) 
        }
        
    }

    searchText = (e) =>{
        this.setState({text: e.target.value}, () => console.log(this.state.text))
    }

    render(){
        
        return (
            <div>
                <h1>Gif List Container</h1>
                < GifList gif={this.state.gif}/>
                < GifSearch textValue={this.state.text} searchText={this.searchText}/>
            </div>
        )
    }
}

export default GifListContainer


