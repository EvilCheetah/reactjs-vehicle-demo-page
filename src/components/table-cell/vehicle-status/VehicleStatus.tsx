import './VehicleStatus.css';
import { StatusType } from "../../../types/status.type";


function VehicleStatus({ status }: { status: StatusType })
{
    return (
        <td 
            className={`status ${status.toLowerCase().replaceAll(' ', '-')}`}
        >
            { status }
        </td>
    );
}


export default VehicleStatus;