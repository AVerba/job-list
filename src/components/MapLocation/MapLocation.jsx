import styles from './MapLocation.module.css';
import Map, {Marker} from 'react-map-gl';

export const MapLocation = () => {
  // {long, lat}

  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 15,
        attributionControl: false
      }}

      mapboxAccessToken='pk.eyJ1IjoidmVyYmE4OCIsImEiOiJjbDVqb2ppdzQwMjRoM2tsdmt2ZDlpYXhiIn0.llah12voCfOAFfKYZKk7HQ'
      style={{width: 700, height: 700}}
      mapStyle="mapbox://styles/mapbox/streets-v9"


    >
      <Marker longitude={-122.4} latitude={37.8} anchor="bottom">
        <img src="./favicon.ico" />
      </Marker>
    </Map>

  );
}


