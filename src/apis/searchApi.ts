import axios from 'axios';

const searchApi = axios.create({
        baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
        params: {
                limit: 5,
                language: 'es',
                access_token: 'pk.eyJ1IjoiZ29uemFsb3BlbmlhIiwiYSI6ImNtYjdncnplajBhZTAycW9rbzcyZGMxdTIifQ.CglS1-EJLgG9dwCyTBhIzw'
        }
})

export default searchApi;