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

    componentDidUpdate(prevProps, prevState){
        if (prevState.text !== this.state.text){

            fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=lFQWQWwOZaVmG9ZbS4POINPRtOHTSir9`)
            .then(resp => resp.json())
            .then(data => {
                let array = data.data.slice(0,3)
                this.setState({ gif: array})
            }) 
        }
        
    }

   

    submitHandler = (e) =>{
        // console.log("in submit in containter", e.target.children[0].value)
        e.preventDefault()
        this.setState({text: e.target.children[0].value})
        
    }

    render(){
        
        return (
            <div>
                <h1>Gif List Container</h1>
                < GifList gif={this.state.gif}/>
                < GifSearch searchText={this.searchText} submitHandler={this.submitHandler}/>
            </div>
        )
    }
}

export default GifListContainer


