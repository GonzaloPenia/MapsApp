import { Map } from "mapbox-gl";
import { createContext } from "react";

interface MapContextProps {
    isMapReady: boolean;
    map?: Map;

    //Methods
    setMap: (map: Map) => void;
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>
}

export const MapContext = createContext( {} as MapContextProps)

// MapContext.ts
// Este archivo define la estructura del contexto usando createContext de React. Define:
// Una interfaz MapContextProps que especifica qué datos y métodos estarán disponibles en el contexto:
// isMapReady: un booleano que indica si el mapa está listo
// map: una instancia opcional del mapa de Mapbox
// setMap: un método para actualizar el mapa
// Crea el contexto usando createContext con un valor inicial vacío (usando type assertion as MapContextProps)
// 

// MapProvider.tsx - presentación
// Este es el componente proveedor que:
// Define el estado inicial del mapa usando INITIAL_STATE
// Utiliza useReducer para manejar el estado del mapa de forma más compleja
// Proporciona el método setMap que dispara una acción al reducer
// Envuelve a los componentes hijos con MapContext.Provider, pasando:
// El estado actual del mapa (...state)
// El método setMap para actualizar el mapa
 
// mapReducer.ts - lógica de estado
// Este archivo maneja la lógica de actualización del estado:
// Define un tipo MapAction que especifica las acciones posibles (en este caso solo 'setMap')
// Implementa el reducer que:
// Recibe el estado actual y una acción
// Cuando recibe la acción 'setMap':
// Actualiza isMapReady a true
// Guarda la nueva instancia del mapa en el estado
// El flujo de trabajo es el siguiente:
// Cuando un componente necesita acceder al mapa, usa useContext(MapContext)
// Para actualizar el mapa, llama a setMap con una nueva instancia del mapa
// Esto dispara una acción al reducer
// El reducer actualiza el estado

//! Todos los componentes que usan el contexto se actualizan con el nuevo estado

// Ejemplo de uso en un componente hijo:

// const { map, isMapReady, setMap } = useContext(MapContext);

// Este patrón es útil porque:
// Evita prop drilling (pasar props a través de múltiples niveles)
// Centraliza el estado del mapa
// Proporciona una forma consistente de acceder y actualizar el mapa en cualquier componente
// Separa la lógica de estado (reducer) de la presentación (provider)