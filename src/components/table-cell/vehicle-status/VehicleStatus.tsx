import './VehicleStatus.css';
import { StatusType } from "../../../types/status.type";


function VehicleStatus({ status }: { status: StatusType, pre_booked: boolean })
{
    return (
        <td>
            <div className={`status ${status.toLowerCase().replaceAll(' ', '-')}`}>{ status }</div>
        </td>
    );
}


export default VehicleStatus;