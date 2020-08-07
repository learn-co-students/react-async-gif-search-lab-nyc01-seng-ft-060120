import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
    state={
        gifObjects: []
    }


  
    

    searchSubmit=(searchTerm)=>{
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=QUFAi1mNhaPiLXACePgjet0NUGpqEiel&rating=g`)
        .then(response => response.json())
        .then(gifs =>{
            let gifArray=[]
            for(let i = 0; i < 3; i++){
                gifArray.push(gifs.data[i])
            };
            this.setState({gifObjects: gifArray})
            console.log(this.state) 
        })
        
    }
    
    render(){
        return(
            <span>
            <GifSearch formSubmit={this.searchSubmit}/><br/>
            <GifList gifs={this.state.gifObjects}/>
            </span>
        )
    }
}

export default GifListContainer