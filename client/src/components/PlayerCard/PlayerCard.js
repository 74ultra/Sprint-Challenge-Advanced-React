import React from 'react';
import { Card, Icon } from 'semantic-ui-react';


const PlayerCard = ({ name, country, searches}) => {

    return(
        <Card>
            <Card.Content header={name} />
            <Card.Content extra>
                <Icon name='globe' />Country: {country}
            </Card.Content>
            <Card.Content extra>
                <Icon name='search' />Searches: {searches}
            </Card.Content>
        </Card>
    )
}

export default PlayerCard;