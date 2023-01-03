import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {

  //When you define the propTypes within the class,
  //you don't have to instantiate the class, you can
  //access those props from within the class
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render(){
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;

    return (

      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter
        score={score}
        index={index}
        changeScore={changeScore}
        />
      </div>
    );
  }

}

// Player.propTypes = {
//
// };

export default Player;
