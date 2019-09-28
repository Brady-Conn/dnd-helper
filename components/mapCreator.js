import React, { Component } from 'react';
import Map from './map';
import NewMap from './newMap';

class MapCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: [],
      newMap: false,
      currentMap: null,
    }
  }

  handleNewMapClick = () => {
    this.setState({newMap: true})
  }

  render() {
    const { map, newMap } = this.state;
    const showNewMap = newMap ? <NewMap /> : null;
    return (
      <div className="map-creator">
        <div className="button-container">
          <button onClick={() => this.handleNewMapClick()}>New Map</button>
          <button>Delete Map</button>
          <button>Clear Map</button>
          <button>Save Map</button>
        </div>
        <Map mapArr={map}></Map>
        {showNewMap}
        <style jsx>{`
        button {
          font-size: 16px;
          margin: 5px;
          background-color: purple;
          color: white;
          border-radius: 5px;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        .map-creator {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        `}</style>
      </div>
    )
  }
}

export default MapCreator;