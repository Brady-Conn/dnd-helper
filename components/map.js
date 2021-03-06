import MapBox from './mapBox';

const Map = ({ mapArr, name, handleAddTile }) => (
  <div className="map">
    <span className="map-name">{name}</span>
    {mapArr.map((row, index) => <div className="mapRow" key={"row" + index}>{row.map((box, index) => {
      return <MapBox handleAddTile={handleAddTile} key={'column' + index} type={box.color} player={box.player} location={box.location}/>
    })}</div>)}
    <style jsx>{`
      .map {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .map-name {
        font-size: 24px;
        margin: 5px;
      }
      .mapRow {
        display: flex;
      }
    `}</style>
  </div>
);

export default Map;
