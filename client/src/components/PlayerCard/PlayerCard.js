import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import './PlayerCard.scss';


const PlayerCard = ({ name, country, searches}) => {

    return (
      <div className="player-card">
        <Card>
          <Card.Content header={name} />
          <Card.Content extra>
            <Icon name="globe" />
            Country: {country}
          </Card.Content>
          <Card.Content extra>
            <Icon name="search" />
            Searches: {searches}
          </Card.Content>
        </Card>
      </div>
    );
}

export default PlayerCard;