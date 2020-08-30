import React, { Fragment, useState } from 'react';

const PlayerPiece = ({color, right, bottom}) => {

    // const [right, setRight] = useState(0);
    // const [bottom, setBottom] = useState(0);

    return(
        <Fragment>
            <div className={color === 'blue' ? 'player-piece blue' : 'player-piece red'} style={{right: right, bottom: bottom}}></div>
        </Fragment>
    );
}

export default PlayerPiece;