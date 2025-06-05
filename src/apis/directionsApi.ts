import axios from 'axios';

const directionsApi = axios.create({
        baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
        params: {
                alternatives: false,
                geometries: 'geojson',
                overview: 'simplified',
                steps: false,


                access_token: 'pk.eyJ1IjoiZ29uemFsb3BlbmlhIiwiYSI6ImNtYmIyZXU1dzFlbnYycnE1a2hsZ3E0bmwifQ.pdEdSAzuH_xEE2md9ZwqLg'
        }
})

export default directionsApi;

