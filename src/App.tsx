import './App.css'
import VehiclesTable from './components/vehicles-table/VehiclesTable'
import vehicles from './data.json';


function App()
{
    return (
        <div className="App">
            <VehiclesTable vehicles={vehicles}/>
        </div>
  )
}

export default App
