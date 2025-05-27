import { useContext } from 'react'
import { PlacesContext } from '../context'
import { Loading } from './Loading'

export const MapView = () => {

  //USAMOS EL CONTEXTO --> PlacesContext.ts
  const {isLoading, userLocation} = useContext(PlacesContext)


  if(isLoading){
    return(<Loading/>)
  }

  return (
    <div>
      {userLocation?.join(' ; ')}
    </div>
  )
}
