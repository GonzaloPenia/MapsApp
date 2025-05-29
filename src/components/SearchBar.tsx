import { ChangeEvent, useContext, useRef } from 'react'
import { PlacesContext } from '../context';

export const SearchBar = () => {

  const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const {searchPlacesByTerm} = useContext(PlacesContext);
  
  const onQueryChanged = ( event : ChangeEvent<HTMLInputElement> ) => { 
    if(debounceRef.current){
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout( () => {
      //console.log('Debounce: ', event.target.value);
      searchPlacesByTerm( event.target.value);
    }, 500);

                      
  }


  return (
    <div className='search-container'>
        <input 
        type='text' 
        className='form-control' 
        placeholder='Buscar un lugar'
        onChange={ onQueryChanged }/>
        </div>
  )
}
