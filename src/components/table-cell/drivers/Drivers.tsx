import './Drivers.css';
import { Driver } from "../../../interface/driver.interface";
import DriverCard from '../../drivers/DriverCard';


function Drivers({ drivers }: { drivers: Driver[] })
{
    return (
        <td>
            <div className="drivers">
                {
                    ( drivers && drivers.length < 1 ) ? 
                    '—' :
                    drivers.map(
                        (driver) => ( <DriverCard key={driver.id}  driver={driver} /> )
                    )
                }
            </div>
        </td>
    );
}


export default Drivers;