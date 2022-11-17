import styles from './MapLocation.module.css';
import Map from 'react-map-gl';

export const MapLocation = ({long, lat}) => {

  return(
    <Map
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  )

}
