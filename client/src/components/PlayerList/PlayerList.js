import React from 'react';

import PlayerCard from '../PlayerCard/PlayerCard.js'

const PlayerList = ({ playerData }) => {

    return(
        <div>
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