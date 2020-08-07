import React from 'react'


function GifSearch(props) {
    return (
        <div className="col-sm-3">
            <h4 className="font-weight-bolder">Enter a Search Term:</h4>
            <form onSubmit={props.searchHandler}>
                <input 
                    className="form-control"
                    type="text" 
                    name="query" 
                    onChange={props.changeHandler}
                />
                <button 
                type="submit" 
                className="btn btn-success">Find Gifs</button>
            </form>
        </div>
    )   

}


export default GifSearch