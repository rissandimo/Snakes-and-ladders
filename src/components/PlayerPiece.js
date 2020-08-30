import React, { Fragment, useState } from 'react';

const PlayerPiece = ({color, right, bottom, player1, player2, p1right, p1bottom, p2right, p2bottom}) => {

    return(
        <Fragment>
            <div 
            className={color === 'blue' ? 'player-piece blue' : 'player-piece red'} 
            style={{right: p1right, bottom: p1bottom}}
            
            ></div>
        </Fragment>
    );
}

export default PlayerPiece;