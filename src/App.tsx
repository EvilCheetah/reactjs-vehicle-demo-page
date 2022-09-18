import './App.css'
import VehiclesTable from './components/vehicles-table/VehiclesTable'
import { Vehicle } from './interface/vehicle.interface';
import vehicles from './data/vehicle.json';


function App()
{
    return (
        <div className="App">
            <VehiclesTable vehicles={vehicles as Vehicle[]}/>
        </div>
  )
}

export default App
