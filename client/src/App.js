import React from 'react';
import axios from 'axios';
import './styles.scss';
import { Header, Icon } from 'semantic-ui-react';

import NavBar from './components/NavBar/NavBar.js';
import PlayerList from './components/PlayerList/PlayerList.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        let playerApiData = res.data;
        this.setState({
          playerData: playerApiData
        })
      })
  }

  
  
  render(){
    return(
      <div className='main'>
        <NavBar className='navbar' />
        <div className='main-header'>
          <Header className='header' as='h2' icon>
            <Icon name='soccer' />
            Women's World Cup
            <Header.Subheader>
              Player search interest from Google Trends
            </Header.Subheader>
          </Header>
        </div>
        <PlayerList playerData={this.state.playerData}/>
      </div>
    )
  }
}

export default App;
