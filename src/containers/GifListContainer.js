import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import apiKey from '../secret'

export default class GifListContainer extends Component {
    state = {
        apiResponse: {}
    }
    
    componentDidMount() {
        fetch(this.constructCallURL())
            .then(resp => resp.json())
            .then(json => this.setState({apiResponse: json}))
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
                <GifList gifList={this.state.apiResponse} />
                <GifSearch />
            </div>
        )
    }
}