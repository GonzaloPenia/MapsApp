import './styles.css';
import { PlacesProvider } from "./context";
import { HomeScreen } from "./screens/HomeScreen";
import { MapProvider } from './context/map/MapProvider';

export const MapsApp = () => {
  return (
    <PlacesProvider>
        <MapProvider >
            <HomeScreen/>
        </MapProvider>
    </PlacesProvider>
)
}
