import React from 'react'

class GifSearch extends React.Component {


    render() {
        return (
            <form>
                <input type="text" onChange={this.props.changeHandler}/>
            </form>
        )
    }
}

export default GifSearch