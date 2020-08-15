import React, { Fragment } from 'react';

import './styles/board.css';

function Square(props){
    return (
        <Fragment>
            <div className="square">
                {props.number}
            </div>
        </Fragment>
    )
}

export default Square;