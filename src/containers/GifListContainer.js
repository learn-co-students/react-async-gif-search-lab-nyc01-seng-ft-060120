import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import apiKey from '../secret'

export default class GifListContainer extends Component {
    state = {
        apiResponse: {},
        query: "dolphin"
    }

    searchHandler = (e) => {
        e.preventDefault()
        this.fetchApi()
    }

    changeHandler = (e) => {
        let t = e.target
        this.setState({
            query: t.value
        })
    }
    
    componentDidMount() {
        this.fetchApi()
    }

    constructCallURL() {
        let baseURL = "https://api.giphy.com/v1/gifs/search?q=";
        let query = this.state.query;
        let apiPrep = "&api_key="
        let apiValue = apiKey;
        let rating = "&rating=g"
        return baseURL + query + apiPrep + apiValue + rating;
    }


    fetchApi() {
        fetch(this.constructCallURL())
            .then(resp => resp.json())
            .then(json => this.setState({apiResponse: json}))
    }

    render() {
        return (
            <div>
                <GifSearch changeHandler={this.changeHandler} searchHandler={this.searchHandler}/>
                <GifList gifList={this.state.apiResponse} />
            </div>
        )
    }
}