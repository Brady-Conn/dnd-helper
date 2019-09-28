import React, { Component } from 'react';
import Map from './map';
import NewMap from './newMap';

class MapCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: [],
      mapName: '',
      newMap: false,
      showMap: true,
    }
  }

  componentDidMount() {
    const map = JSON.parse(window.localStorage.getItem('Map1'));
    if (map) {
      this.setState({map: map.mapGrid, mapName: map.name})
    }
  }

  handleNewMapClick = () => {
    this.setState({newMap: true, showMap: false})
  }

  createNewMap = (e, size, name) => {
    e.preventDefault()
    const mapGrid = []
    for (let i = 0; i < size[0]; i += 1) {
      let row = []
      for (let j = 0; j < size[1]; j += 1) {
        row.push({color: 'white', player: null, location: [i, j]})
      }
      mapGrid.push(row);
    }
    const mapNumber = window.localStorage.length
    window.localStorage.setItem(`Map${mapNumber + 1}`, JSON.stringify({name: name, mapGrid}))
    this.setState({map: mapGrid, newMap: false, showMap: true})
  }

  render() {
    const { map, newMap, showMap, mapName } = this.state;
    const showNewMap = newMap ? <NewMap createNewMap={this.createNewMap}/> : null;
    const mapDisplay = showMap ? <Map mapArr={map} name={mapName}/> : null;
    return (
      <div className="map-creator">
        <div className="button-container">
          <button onClick={() => this.handleNewMapClick()}>New Map</button>
          <button>Delete Map</button>
          <button>Clear Map</button>
          <button>Save Map</button>
        </div>
        {mapDisplay}
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
          align-items: center;
          flex-direction: column;
        }
        `}</style>
      </div>
    )
  }
}

export default MapCreator;