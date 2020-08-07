import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

const API = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Ol7b8imLWYcqPi5MI39bbS050WikVJnX&rating=g"

// gifs: data.images.original.url

class GifListContainer extends React.Component {
    state = {
        gifs: [],
        searchValue: ""
    }

    searchHandler = (e) => {
        this.setState({searchValue: e.target.value})
    }

    componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => {this.setState({gifs: data}), () => console.log(data)})
    };

    searchedGifs = () => {
        return this.state.gifs.data.slice(0, 3).filter(gif => gif.url.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
    // ^ 'searchedGifs' filters through all the gif objects (in state) and returns the object whose url was typed in  

    render() { 
        
        // this.state.gifs.length !== 0
        // ? console.log(this.state.gifs.data)
        // : console.log(this.state.gifs.data.slice(0,3))

        // let threeGifs = this.state.gifs.slice(0,3)
        // console.log(threeGifs)

        return (  
            <div class="ui segment">
                <GifSearch searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
                {!this.state.gifs.data 
                ? <h1>DATA LOADING</h1> 
                : this.searchedGifs().map(gifObj => <GifList key={gifObj.id} gif={gifObj}/>)}
            </div>
        );
    };
};

export default GifListContainer;