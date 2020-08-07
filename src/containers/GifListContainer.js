import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchValue: ""
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({searchValue: e.target.children[0].value})
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=2Zbd1fh1zZzutJa7dVZhm4NAxNw6fe7t&rating=g')
        .then(response => response.json())
        .then(gifs => this.setState({gifs: gifs.data}))
    }
    render(){
        let gifs = this.state.gifs.filter(gif => gif.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).slice(0, 3).map(gifObj => <GifList key={gifObj.id} gif={gifObj}/>)

        
        console.log(gifs)
        return(
            <div>
                <GifSearch submitHandler={this.submitHandler}/>
                <h1>Hello form GifListContainer</h1>
                <ol>
                {gifs}
                </ol>     
            </div>
            
        )
    }
}

export default GifListContainer