import { useContext, useLayoutEffect, useRef } from 'react'
import { PlacesContext } from '../context'
import {Map} from 'mapbox-gl';
import { Loading } from './Loading'

export const MapView = () => {

  //USAMOS EL CONTEXTO --> PlacesContext.ts
  const {isLoading, userLocation} = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if(!isLoading){
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    }
    
  }, [isLoading])
  
  if(isLoading){
    return(<Loading/>)
  }



  return (
    <div ref={mapDiv}
          style={{
            height:'100vh',
            left:'0',
            position:'fixed',
            top:'0',
            width:'100vw',
          }}
    >
      {userLocation?.join(' ; ')}
    </div>
  )
}
