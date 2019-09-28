import React, { Component } from 'react';

class NewMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      size: [0, 0],
    }
  }

  handleWidthOnChange = (e) => {

  }

  handleHeightOnChange = (e) => {

  }

  handleCreateOnClick = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="new-map-form-container">
        <form className="new-map-form">
          <label>Map Name:
            <input type="text" name="name"/>
          </label>
          <label>Width:
            <input type="number" name="width"/>
          </label>
          <label>Height:
            <input type="number" name="height"/>
          </label>
          <button className="create-map-button" onClick={(e) => this.handleCreateOnClick(e)}>Create</button>
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