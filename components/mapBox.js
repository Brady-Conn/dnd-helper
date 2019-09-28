import React, { Component } from 'react';

class MapBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: null,
      player: null,
      selected: false,
      location: null,
    }
  }

  componentDidMount() {
    const { type, player, location } = this.props;
    this.setState({ type, player, location })
  }

  render() {
    const { type, player } = this.state;
    return (
      <div className="box">
        <style jsx>{`
          .box {
            border: solid black 2px;
            height: 50px;
            width: 50px;
            background-color: ${type};
          }
        `}</style>
      </div>
    )
  }
}

export default MapBox;