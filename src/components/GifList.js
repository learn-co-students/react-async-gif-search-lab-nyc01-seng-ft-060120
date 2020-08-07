import React from 'react';

let buildList = (list) => {
    if (list.data) {
        return list.data.map(gif => <li><img alt="" src={gif.images.original.url}/></li>)
    }
    
}

function GifList(props) {
    return(
        <div className="col-sm-9">
            <ul>
                {buildList(props.gifList)}
            </ul>
        </div>
    )
};

export default GifList;