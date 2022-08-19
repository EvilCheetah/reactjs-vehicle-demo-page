import VehicleEntry from "./VehicleEntry";
import { TableBodyProps } from "../../interface/props/table-body-props.interface";
import { Vehicle } from "../../interface/vehicle.interface";


function TableBody({ vehicles }: TableBodyProps)
{
    return (
        <>
        {
            vehicles.map(
                (vehicle: Vehicle) =>
                {
                    return (
                        <tbody key={vehicle.unit_id}>
                            <VehicleEntry vehicle={vehicle} />
                        </tbody>
                    ) 
                }
            )
        }
        </>
    );
}


export default TableBody;