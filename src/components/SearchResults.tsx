import  { useContext } from 'react'
import { PlacesContext } from '../context';

export const SearchResults = () => {
  
  const {places, isLoadingPlaces} = useContext(PlacesContext);
  
  console.log('Places data:', places);
  
  if (isLoadingPlaces) {
    return <div>Cargando...</div>
  }

  if (places.length === 0) {
    return <div>No hay lugares para mostrar</div>
  }
  
  return (
    <ul className='list-group mt-3'>
        {
          places.map( place => {
            return (
                <li
                    key={place.id} 
                    className='list-group-item list-group-item-action'
                >
                    <h6>{ place.place_name}</h6>
                    <h6>{place.place_name_es}</h6>
                </li>
            ) 
          })
        }
    </ul>
  )
}
