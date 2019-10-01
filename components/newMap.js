import React, { Component } from 'react';

class NewMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      width: 0,
      height: 0
    }
  }

  handleWidthOnChange = (e) => {
    this.setState({width: e.target.value})
  }

  handleHeightOnChange = (e) => {
    this.setState({height: e.target.value})
  }

  handleNameOnChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const { createNewMap } = this.props;
    const { width, height, name } = this.state;
    return (
      <div className="new-map-form-container">
        <form className="new-map-form">
          <label>Map Name:
            <input type="text" name="name" onChange={(e) => this.handleNameOnChange(e)} />
          </label>
          <label>Width: ({this.state.width})
            <input type="range" step="1" name="width" value={this.state.width} onChange={(e) => this.handleWidthOnChange(e)} max="16" min="1"/>
          </label>
          <label>Height: ({this.state.height})
            <input type="range" step="1" name="height" value={this.state.height} onChange={(e) => this.handleHeightOnChange(e)} max="16" min="1"/>
          </label>
          <button className="create-map-button" onClick={(e) => createNewMap(e, [width, height], name)}>Create</button>
        </form>
        <style jsx>{`
          .create-map-button {
            width: 200px;
          }
          label {
            display: flex;
            margin: 5px;
            width: 250px;
            justify-content: flex-end;
          }
          .new-map-form {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          .new-map-form-container {
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}

export default NewMap;