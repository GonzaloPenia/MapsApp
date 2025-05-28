import './styles.css';
import { PlacesProvider } from "./context";
import { HomeScreen } from "./screens/HomeScreen";
import { MapsProvider } from './context/map/MapsProvider';

export const MapsApp = () => {
  return (
    <PlacesProvider>
        <MapsProvider >
            <HomeScreen/>
        </MapsProvider>
    </PlacesProvider>
)
}
