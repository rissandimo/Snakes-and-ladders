import React, { Fragment } from 'react';

const PlayerPiece = ({color}) => {

    return(
        <Fragment>
            <div className={color === 'blue' ? 'player-piece blue' : 'player-piece red'}></div>
        </Fragment>
    );
}

export default PlayerPiece;