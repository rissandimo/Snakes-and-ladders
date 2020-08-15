import React from 'react';

import './styles/activePlayer.css';


function ActivePlayer(props){

    return(
        <div>
            <div className="active-player">
                <h3>Players</h3>
                <div className="player player-1"></div>
                <div className="player player-2"></div>
            </div>
        </div>
    );
}

export default ActivePlayer;