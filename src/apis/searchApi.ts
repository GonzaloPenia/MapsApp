import axios from 'axios';

const searchApi = axios.create({
        baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
        params: {
                limit: 5,
                language: 'es',
                access_token: 'pk.eyJ1IjoiZ29uemFsb3BlbmlhIiwiYSI6ImNtYmIyZXU1dzFlbnYycnE1a2hsZ3E0bmwifQ.pdEdSAzuH_xEE2md9ZwqLg'
        }
})

export default searchApi;

