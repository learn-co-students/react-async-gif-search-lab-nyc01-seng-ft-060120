import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import apiKey from '../secret'

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
        let apiPrep = "&api_key="
        let apiValue = apiKey;
        let rating = "&rating=g"
        return baseURL + query + apiPrep + apiValue + rating;
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