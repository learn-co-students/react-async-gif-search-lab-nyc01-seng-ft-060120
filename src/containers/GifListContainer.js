import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    state = {
        apiResponse: {}
    }
    
    componentDidMount() {
        // fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
        fetch(this.constructCallURL())
            .then(resp => resp.json())
            .then(json => console.log(json))
    }

    constructCallURL() {
        let baseURL = "https://api.giphy.com/v1/gifs/search?q=";
        let query = "dolphin";
        let apiKey = "&api_key="
        let apiValue = "kPbEpiI85WQ6ocF5IkJ7BqWklc2Sh296";
        let rating = "&rating=g"
        return baseURL + query + apiKey + apiValue + rating;
    }

    render() {
        return (
            <div>
                <GifList />
                <GifSearch />
            </div>
        )
    }
}