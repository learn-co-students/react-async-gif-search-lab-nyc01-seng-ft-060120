import React from 'react';

let buildList = (list) => {
    console.log(list.data.length);
}

function GifList(props) {
    return(
        <ul>
            {buildList(props.gifList)}
        </ul>
    )
};

export default GifList;