import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
        // searchValue: ""
    }

    // searchHandler = (e) => {
    //     this.setState({ searchValue: e.target.value })
    // }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=2VFdGHqtph3WRtoZY69I7RINd4NWSB09&rating=g&limit=3")
        .then(resp => resp.json())
        .then(stuff => this.setState({ gifs: stuff.data}))
        //this final .then can do .then(data => console.log(data))
        //.then(payload => this.setState({ gifs: payload.data })) <- from Tashawn's lecture, better way to access what's needed
    }

    submitHandler = (searchTerm) => {
        console.log("search term: ", searchTerm)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=2VFdGHqtph3WRtoZY69I7RINd4NWSB09&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(stuff => this.setState({ gifs: stuff.data}))
    }

    // searchedGifs = () => {
    //     return this.state.gifs.data.slice(0, 3).filter(gif => gif.url.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    // }

    render () {

        console.log(this.state.gifs)
        return (
            <div>
            <GifSearch submitHandler={this.submitHandler} />
            <GifList gifs={this.state.gifs} />
            
            </div>

            // <div>
            //     <h1>WEIRD GIPHY API SEARCH</h1>
            //     <GifSearch searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
            //     {!this.state.gifs.data
            //     ? <h1>DATA LOADING</h1>
            //     : this.searchedGifs().map(gifObj => <GifList key={gifObj.id} gif={gifObj} />)}
            // </div>
            
        )
    }
}

export default GifListContainer