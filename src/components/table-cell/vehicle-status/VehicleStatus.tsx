import './VehicleStatus.css';
import { StatusType } from "../../../types/status.type";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoadLock } from '@fortawesome/free-solid-svg-icons';


function VehicleStatus({ status, pre_booked }: { status: StatusType, pre_booked: boolean })
{
    return (
        <td>
            <div className={`status ${status.toLowerCase().replaceAll(' ', '-')}`}>{ status }</div>
        </td>
    );
}


export default VehicleStatus;