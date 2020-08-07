import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchValue: ""
    }

    searchHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(gifs => this.setState({gifs: gifs.data}))

    }
    render(){
        let gifs = this.state.gifs.filter(gif => gif.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).slice(0, 3).map(gifObj => <GifList key={gifObj.id} gif={gifObj}/>)        
        console.log(gifs)
        return(
            <div>
                <GifSearch searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
                <h1>Hello from our GifListContainer</h1>
                <ul>
                {gifs}
                </ul>
            </div>
        )
    }
}
export default GifListContainer