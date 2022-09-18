import Drivers from "../table-cell/drivers/Drivers";
import UnitNumber from "../table-cell/unit-number/UnitNumber";
import VehicleType from "../table-cell/vehicle-type/VehicleType";
import VehiclePayload from "../table-cell/vehicle-payload/VehiclePayload";
import { VehicleEntryProps } from "../../interface/props/vehicle-entry-props.interface";
import VehicleStatus from "../table-cell/vehicle-status/VehicleStatus";
import VehicleLocation from "../table-cell/vehicle-location/VehicleLocation";
import VehicleEquipment from "../table-cell/vehicle-equipment/VehicleEquipment";
import VehicleSupplies from "../table-cell/vehicle-supplies/VehicleSupplies";


function VehicleEntry({ vehicle }: VehicleEntryProps)
{
    return (
        <>
            <tr>
                <UnitNumber unit_number={vehicle.unit_number} is_active={vehicle.is_active} reserve={vehicle.reserve} pre_booked={vehicle.pre_booked} />
                <Drivers    drivers={vehicle.drivers} />
                <VehicleType vehicle_type={vehicle.vehicle_type} box_dimensions={vehicle.box_dimensions} door_dimensions={vehicle.door_dimensions} />
                <VehiclePayload payload={vehicle.payload} />
                <VehicleStatus  status={vehicle.status_information.status} pre_booked={vehicle.pre_booked} />
                <VehicleLocation location={vehicle.status_information} />
                <VehicleEquipment existing_equipment={vehicle.equipment} />
                <VehicleSupplies supplies={vehicle.supplies} />
            </tr>
        </>
    );
}


export default VehicleEntry;