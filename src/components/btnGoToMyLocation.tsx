import { useContext } from 'react'
import { MapContext, PlacesContext } from '../context'

export const BtnGoToMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => { 
    if(!isMapReady) throw new Error ('Mapa no disponible');
    if(!userLocation) throw new Error ('Localizacion del usuario disponible');
  
    map?.flyTo({
        zoom: 14,
        center: userLocation,
    })

}

    return (
    <button onClick={onClick}
            className='btn btn-primary'
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}
    >
        Mi ubicacion
    </button>
  )
}
