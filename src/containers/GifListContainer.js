import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_KEY = 'THXnk4nwMgbiZTgbRtEmatMS5AQjFjJJ';

let URLmaker = (query = 'dogs') => `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g&limit=3`

class GifListContainer extends React.Component {
    state = {
        gifs: [],
        searchValue: ''
    }

    componentDidMount(){
        this.fetchGifs();
    }

    fetchGifs = (query) => {
        fetch(URLmaker(query))
        .then(resp => resp.json())
        .then(data => this.setState({gifs: data.data.map(obj => obj.images.original.url)}))
    }

    searchChangeHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }
    searchSubmitHandler = (e) => {
        e.preventDefault();
        this.fetchGifs(this.state.searchValue)
        this.setState({searchValue: ''})
    }

    render() {
        return( 
        <React.Fragment>
            <GifSearch searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler} submitHandler={this.searchSubmitHandler}/>
            <GifList gifs={this.state.gifs}/>
        </React.Fragment>
        )
    }
}

export default GifListContainer;