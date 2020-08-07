import React from 'react';

// function GifSearch(props) {
//     return (
//         <form>
//         <input placeholder="search for a gif" value={props.searchValue} onChange={props.searchHandler} />
//     </form>
//     )
// }

class GifSearch extends React.Component {
    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }

    render () {

        return (
            <form onSubmit={this.submitHandler} >
                <input value={this.state.searchTerm} onChange={this.changeHandler} />
                <input type="submit" value="search" />
            </form>
        )
    }
}

export default GifSearch