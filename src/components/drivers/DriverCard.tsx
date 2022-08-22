import './DriverCard.css';
import { Driver } from "../../interface/driver.interface";
import DriverName from './DriverName';
import DriverEquipment from './DriverEquipment';


function DriverCard({ driver }: { driver: Driver })
{
    return (
        <div className="driver-card">
            <div className="driver-info">
                <DriverName name={driver.name} />
                <DriverEquipment equipment={driver.equipment} />
            </div>
            <div className="contact-information">
                <a 
                    href={`tel:${driver.phone_number.replaceAll(/\(|\)|-/gi, '')}`} 
                    className="phone-number"
                >
                    {driver.phone_number}
                </a>
            </div>
        </div>
    )        
}


export default DriverCard;