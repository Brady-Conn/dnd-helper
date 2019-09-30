const MapEditor = ({ map, handleTileSelect, addTile }) => {
  const activeStyle = {
    border: "4px solid purple"
  }
  const treeStyle = addTile.tree ? activeStyle : null;
  const rockStyle = addTile.rock ? activeStyle : null;
  const bushStyle = addTile.bush ? activeStyle : null;
  const grassStyle = addTile.grass ? activeStyle : null;
  const pathStyle = addTile.path ? activeStyle : null;
  const mountainStyle = addTile.mountain ? activeStyle : null;


  return (
    <div className="editor-container">
      <span>Add Tree:
        <div className="tree" style={treeStyle} name="tree" onClick={(e) => handleTileSelect(e)}/>
      </span>
      <span>Add Mountain:
        <div className="mountain" style={mountainStyle} name="mountain" onClick={(e) => handleTileSelect(e)}/>
      </span>
      <span>Add Rock:
        <div className="rock" style={rockStyle} name="rock" onClick={(e) => handleTileSelect(e)}/>
      </span>
      <span>Add Bush:
        <div className="bush" style={bushStyle} name="bush" onClick={(e) => handleTileSelect(e)}/>
      </span>
      <span>Add Grass:
        <div className="grass" style={grassStyle} name="grass" onClick={(e) => handleTileSelect(e)}/>
      </span>
      <span>Add path:
        <div className="path" style={pathStyle} name="path" onClick={(e) => handleTileSelect(e)}/>
      </span>
      <style jsx>{`
        .tree {
          background-image: url('../static/001-tree.png');
          background-color: #599942;
          background-position: center; 
          background-repeat: no-repeat;
          height: 50px;
          width: 50px;
        }

        .mountain {
          background-image: url("../static/003-mountain.png");
          background-color: #4f4d49;
          background-position: center; 
          background-repeat: no-repeat;
          height: 50px;
          width: 50px;
        }
        .rock {
          background-image: url('../static/002-rock.png');
          background-color: #543f05;
          background-position: center; 
          background-repeat: no-repeat;
          height: 50px;
          width: 50px;
        }
        .bush {
          background-image: url('../static/004-bush.png');
          background-color: #216e05;
          background-position: center; 
          background-repeat: no-repeat;
          height: 50px;
          width: 50px;
        }

        .grass {
          background-color: #40e305;
          background-position: center; 
          background-repeat: no-repeat;
          height: 50px;
          width: 50px;
        }
        .path {
          background-color: #8a911c;
          background-position: center; 
          background-repeat: no-repeat;
          height: 50px;
          width: 50px;
        }

        .editor-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export default MapEditor;