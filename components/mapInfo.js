const MapMenu = ({mapList, handleMapSelect}) => (
  <div className="map-menu">
    <span>Your Maps:</span>
    {mapList.map((map, index) => <button onClick={(e) => handleMapSelect(e, map.mapGrid, map.name)} className="map-button" key={'map' + index}>{map.name}</button>)}
    <style jsx>{`
      .map-button {
        font-size: 16px;
        margin: 5px;
        background-color: purple;
        color: white;
        border-radius: 5px;
        width: 150px;
      }
      .map-menu {
        display: flex;
        flex-direction: column;
        margin: 5px;
        width: 100%;
      }
    `}</style>
  </div>
)

export default MapMenu;