import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );

  const LocationPin = ({ text }) => (
    <div className="pin">
      <button icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );

//   bootstrapURLKeys is an object that holds the API key you copied from your Google Console. Now you can hardcode the key here, but that is not recommended for code that gets committed to GitHub or is otherwise publicly accessible. You can check out this discussion on how to secure your API keys on the client
// defaultCenter is simply the center of the map when it loads for the first time
// defaultZoom defines the initial scale of the map


// Usage:
// const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
//   }
//   <MapSection location={location} zoomLevel={17} /> 