import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import FavesContainer from './FavesContainer';

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

    addToFaves = (gifObj) => {
        console.log(gifObj)
        console.log(this.state.gifs.data)
        let newGifsArray = this.state.gifs.data.map(gif => {
            if (gif.id === gifObj.Id) {
                return gifObj
            }
            return gif
            });
            this.setState({gifs: {...this.state.gifs, data: newGifsArray}});
    };

    filteredGifsByFaves = (newGifsArray) => {
        // newGifsArray.filter(gifObj => )
    }
    // ^^ which we need to filter through and set as state in our new Faves Container
    // new state key (to track faves) here bc lowest common parent 

    render() { 
        
        // this.state.gifs.length !== 0
        // ? console.log(this.state.gifs.data)
        // : console.log(this.state.gifs.data.slice(0,3))

        // let threeGifs = this.state.gifs.slice(0,3)
        // console.log(threeGifs)

        return (  
            <div class="ui segment">
                <h3>GIFs:</h3>
                <div class="ui two column very relaxed grid">
                    <div class="column">
                        {!this.state.gifs.data 
                        ? <h1>DATA LOADING</h1> 
                        : this.searchedGifs().map(gifObj => <GifList key={gifObj.id} gif={gifObj} addToFaves={this.addToFaves}/>)}
                    </div>
                    <div class="column">
                        <GifSearch searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
                        <FavesContainer />
                    </div>
                </div>
            </div>
        );
    };
};

export default GifListContainer;