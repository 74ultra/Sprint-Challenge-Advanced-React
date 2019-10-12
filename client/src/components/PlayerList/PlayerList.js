import React from 'react';

import PlayerCard from '../PlayerCard/PlayerCard.js';
import './PlayerList.scss';

const PlayerList = ({ playerData }) => {

    return(
        <div className='player-card-wrapper'>
            {playerData.map(player => {
                return <PlayerCard key={player.id} 
                                   name={player.name}
                                   country={player.country}
                                   searches={player.searches}
                />
            })}
        </div>
    )
}

export default PlayerList;