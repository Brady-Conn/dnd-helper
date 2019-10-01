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
          'backgroundImage': 'url("../static/003-mountain.png")',
          'backgroundColor': '#4f4d49',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat'
        },
        rock: {
          'backgroundImage': "url('../static/002-rock.png')",
          'backgroundColor': '#543f05',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat'
        },
        bush: {
          'backgroundImage': "url('../static/004-bush.png')",
          'backgroundColor': '#216e05',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat'
        },
        grass: {
          'backgroundColor': '#40e305',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat'
        },
        path: {
          'backgroundColor': '#8a911c',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat'
        },
        tree: {
          'backgroundImage': "url('../static/001-tree.png')",
          'backgroundColor': '#599942',
          'backgroundPosition': 'center',
          'backgroundRepeat': 'no-repeat'
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