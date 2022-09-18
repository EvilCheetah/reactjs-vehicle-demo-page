import './VehicleLocation.css';
import { DateTime, Interval } from "luxon";
import { Status } from "../../../interface/status.interface";


function VehicleLocation({ location }: { location: Status })
{
    // const [city, state] = location.location.split(', ');
    const date     = DateTime.fromISO(location.last_updated).setZone("America/Los_Angeles");
    const date_now = DateTime.now().setZone("America/Los_Angeles");
    const months   = Interval.fromDateTimes(date, date_now).length('months');

    return (
        <td className="location">
            <div className="geolocaiton">{location.location}</div>
            <div className={`last-updated ${months > 1 ? 'outdated' : 'up-to-date'}`}>
                { date.toFormat('LLL dd, kkkk, HH:mm ZZZZ') }
            </div>
        </td>
    );
}


export default VehicleLocation;