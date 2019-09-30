import React, { Component } from 'react';

class MapBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: null,
      player: null,
      selected: false,
      location: null,
      styleInfo: {
        mountain: {
          'background-image': 'url("../static/003-mountain.png")',
          'background-color': '#4f4d49',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        },
        rock: {
          'background-image': "url('../static/002-rock.png')",
          'background-color': '#543f05',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        },
        bush: {
          'background-image': "url('../static/004-bush.png')",
          'background-color': '#216e05',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        },
        grass: {
          'background-color': '#40e305',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        },
        path: {
          'background-color': '#8a911c',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        },
        tree: {
          'background-image': "url('../static/001-tree.png')",
          'background-color': '#599942',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        }
      }
    }
  }

  componentDidMount() {
    const { type, player, location } = this.props;
    this.setState({ type, player, location })
  }
  

  render() {
    const { styleInfo, location } = this.state;
    const { handleAddTile, type } = this.props;
    const background = styleInfo[type];
    console.log(background, type)
    return (
      <div style={background} className="box" onClick={(e) => {handleAddTile(e, location)}}> 
        <style jsx>{`
          .box {
            border: solid black 2px;
            height: 50px;
            width: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default MapBox;