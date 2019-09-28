import React, { Component } from 'react';

class MapBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: null,
      player: null,
    }
  }

  render() {
    const { type, player } = this.state;
    return (
      <div className={type || player}></div>
    )
  }
}

export default MapBox;