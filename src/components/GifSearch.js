import React from 'react'


function GifSearch(props) {
    return (
        <div>
            <h1>GifSearch</h1>
            <form onSubmit={props.searchHandler}>
                <input type="text" name="query" onChange={props.changeHandler}/>
            </form>
        </div>
    )   

}


export default GifSearch