const MapEditor = ({ map }) => (
  <div className="editor-container">
    <button name="light green">Add Grass</button>
    <button name="dark brown">Add Rock</button>
    <button name="dark green">Add Tree</button>
    <button name="light brown">Add Path</button>
    <style jsx>{`
      button {
            font-size: 16px;
            margin: 5px;
            background-color: purple;
            color: white;
            border-radius: 5px;
          }

      .editor-container {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
)

export default MapEditor;