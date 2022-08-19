import './VehicleTable.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { VEHICLE_HEADERS } from "../../constant/vehicle-headers";
import { TableBodyProps } from "../../interface/props/table-body-props.interface";


function VehiclesTable({ vehicles }: TableBodyProps)
{
    return (
        <table>
            <TableHeader headers={VEHICLE_HEADERS} />
            <TableBody vehicles={vehicles} />
        </table>
    );
}


export default VehiclesTable