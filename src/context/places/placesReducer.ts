import { PlacesState } from "./PlacesProvider";
import { Feature } from "../../interfaces/places";

type PlacesAction = 
|{type: 'setUserLocation', payload: [number, number ]};
|{type: 'setPlaces', payload: Feature[] };

export const placesReducer = (state: PlacesState, action: PlacesAction ) : PlacesState=> {
    
    //SWITCH dispatch
    switch (action.type) {
        case 'setUserLocation':
            return{
                ...state,
                isLoading: false,
                userLocation: action.payload
            }

        default:
            return state;
    }   
}