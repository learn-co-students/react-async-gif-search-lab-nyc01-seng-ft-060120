import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchValue: ""
    }

    searchHandler = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=2VFdGHqtph3WRtoZY69I7RINd4NWSB09&rating=g").then(resp => resp.json()).then(data => this.setState({ gifs: data}))
    }

    searchedGifs = () => {
        return this.state.gifs.data.slice(0, 3).filter(gif => gif.url.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    render () {

        // console.log(this.state.gifs.data)
        return (
            <div>
                <h1>WEIRD GIPHY API SEARCH</h1>
                <GifSearch searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                {!this.state.gifs.data
                ? <h1>DATA LOADING</h1>
                : this.searchedGifs().map(gifObj => <GifList key={gifObj.id} gif={gifObj} />)}
            </div>
            
        )
    }
}

export default GifListContainer