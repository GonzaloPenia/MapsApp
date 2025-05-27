import { createContext } from "react";

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number, number];
}

//EXPORTAMOS EL CONTEXTO
export const PlacesContext = createContext <PlacesContextProps> ( {} as PlacesContextProps);