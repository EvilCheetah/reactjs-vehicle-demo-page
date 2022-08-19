import './VehicleLocation.css';
import { DateTime } from "luxon";
import { Status } from "../../../interface/status.interface";


function VehicleLocation({ location }: { location: Status })
{
    // const [city, state] = location.location.split(', ');
    const date = DateTime.fromISO(location.last_updated).setZone("America/Los_Angeles");
    const date_now = DateTime.now().setZone("America/Los_Angeles");
    const {months} = date_now.diff(date, ['months']).toObject();

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