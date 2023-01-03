import React, { Component } from 'react';
import Header from './Header';

import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Jillian",
        id: 1,
        score: 0
      },
      {
        name: "Lolo",
        id: 2,
        score: 0
      },
      {
        name: "Jeff",
        id: 3,
        score: 0
      },
      {
        name: "Sammy",
        id: 4,
        score: 0
      }
    ]
  };

  //player id count
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return{
        players: [
          //The spread operator merges the existing objects
          //with the new array being created below:
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Days without swearing"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
