import React from 'react';

const GifSearch = (props) => {
    return (
    <form onSubmit={props.submitHandler}>
        <strong>Enter a Search Term:</strong>
        <br/>
        <input type="text" onChange={props.changeHandler} placeholder='Search' value={props.searchValue} className="form-control" />
        <input type='submit' value='Find Gifs' className="btn btn-success" />
    </form>
    )
}

export default GifSearch;