import './DriverCard.css';
import { Driver } from "../../interface/driver.interface";
import { get_item_visibility } from '../../function/get-item-visibility.function';
import DriverName from './DriverName';


function DriverCard({ driver }: { driver: Driver })
{
    return (
        <div className="driver-card">
            <div className="driver-info">
                <DriverName name={driver.name} />
                <div className="driver-equipment">
                    <div className={`item vaccine ${get_item_visibility(driver.is_vaccinated)}`}>
                        💉
                    </div>
                    <div className={`item hazmat ${get_item_visibility(driver.is_haz_mat)}`}>
                        ☣️
                    </div>
                    <div className={`item xborder ${get_item_visibility(driver.is_xborder)}`}>
                        🛃
                    </div>
                </div>
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