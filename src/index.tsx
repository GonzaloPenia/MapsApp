import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemFsb3BlbmlhIiwiYSI6ImNtYmIyZXU1dzFlbnYycnE1a2hsZ3E0bmwifQ.pdEdSAzuH_xEE2md9ZwqLg'

if(!navigator.geolocation){
  alert('Tu navegador no dispone de acceso a geolocalizacion');
  throw new Error('Tu navegador no dispone de acceso a geolocalizacion');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
