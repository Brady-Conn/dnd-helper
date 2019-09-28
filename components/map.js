import MapBox from './mapBox';

const Map = ({ mapArr }) => (
  <div className="map">
    {mapArr.map((row, index) => <div className="mapRow" key={"row" + index}>{row.map((box, index) => {
      <MapBox type={box[0]} player={box[1]}/>
    })}</div>)}
    <style jsx>{`
      .map {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .mapRow {
        display: flex;
        max-width: 80%;
        
      }
    `}</style>
  </div>
);

export default Map;
