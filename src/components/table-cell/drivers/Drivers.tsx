import './Drivers.css';
import DriverCard from '../../drivers/DriverCard';
import { Driver } from "../../../interface/driver.interface";


function Drivers({ drivers }: { drivers: Driver[] })
{
    return (
        <td>
            <div className="drivers">
                {
                    ( drivers && drivers.length < 1 ) ? 
                    '———' :
                    drivers.map(
                        (driver) => ( <DriverCard key={driver.id}  driver={driver} /> )
                    )
                }
            </div>
        </td>
    );
}


export default Drivers;