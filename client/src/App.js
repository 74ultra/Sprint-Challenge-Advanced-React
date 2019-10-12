import React from 'react';
import axios from 'axios';
import './styles.scss';

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
        <PlayerList playerData={this.state.playerData}/>
      </div>
    )
  }
}

export default App;
