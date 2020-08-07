import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifData: [],
        searchValue: ""
    }

    componentDidMount() {
        let api = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=AC606jbMiCeG9yK1eg9yd9KyGk7w4YY9&rating=g'
        fetch(api)
        .then(response => response.json())
        .then(gif => this.setState({gifData: gif.data}))
    }


    filterGif = () => {
        // let newGifArr = [...this.state.gifData]
        // console.log(this.state.gifData[0].title)
        return this.state.gifData.filter(gif => gif.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
    changeHandler = (event) => {
        this.setState({searchValue: event.target.value})
        this.filterGif()
    }


    render() {
        // let newGifData = this.state.gifData
        // console.log(newGifData)
        let searchGif = this.filterGif()

        let searchList = searchGif.map(eachGif => <GifList eachGif={eachGif} key={eachGif.id} />)
        // let AllGif = newGifData.map(eachGif => <GifList eachGif={eachGif} key={eachGif.id} />)
        
        console.log('search list', searchList)
        return (
            <div>
                <GifSearch changeHandler={this.changeHandler}/>
                <h1> this is gif container</h1>
                <ul>
                    {searchList }
                </ul>
            </div>
        )
    }

}

export default GifListContainer