import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const SimpleMap = (props => {
    return (
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCW_Vioa3QR3TUnN6MuFdprCqabI055FZk' }}
          defaultCenter={{lat: 39.8283, lng: -98.5795}}
          defaultZoom={3.6}
        >
          <Marker
            lat={39.8283}
            lng={-98.5795}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
    );
})

export default SimpleMap;