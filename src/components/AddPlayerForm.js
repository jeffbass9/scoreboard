import React, { Component } from 'react';

// const Counter = ({index, score, changeScore})
const AddPlayerForm = ({ addPlayer }) => {

  //Since we're using the ref, we can comment out
  //the state declaration, as well as the two functions
  //we defined to change and submit state

  // state = {
  //   value: ''
  // };

  let playerInput = React.createRef();

  //We set up this function to enable us to create
  //a controlled component
  // handleValueChange = (e) => {
  //   this.setState({ value: e.target.value });
  // }

  let handleSubmit = (e) => {
    e.preventDefault();
    //Renaming this line using the ref we created:
    // this.props.addPlayer(this.state.value);
    addPlayer(playerInput.current.value);
    // this.setState({ value: ""});
    e.currentTarget.reset();
  }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={playerInput}
          // value={this.state.value}
          // onChange={this.handleValueChange}
          placeholder="Enter a player's name"
          />

        <input
          type="submit"
          value="Add player"
          />
      </form>
    );


}

export default AddPlayerForm;
