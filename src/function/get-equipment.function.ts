import { VEHICLE_EQUIPMENT } from "../constant/vehicle-equipment.constant";
import { EquipmentPresense } from "../interface/equipment.interface";
import { VehicleEquipment } from "../types/vehicle-equipment.type";


function _find_equipment(vehicle_equipment: Array<VehicleEquipment>, equipment_to_find: string): boolean
/// Checks whether `equipment` is within `vehicle_equipment` is in array case insensitively
{
    return vehicle_equipment.some( 
        (equipment) => ( equipment.toLowerCase() === equipment_to_find.toLowerCase() )
    );
}


export function get_equipment_presense(vehicle_equipment: Array<VehicleEquipment>): EquipmentPresense[]
/// Converts an Array of included Equipment to
/// Array of Objects of All Possible eqipment
{
    return VEHICLE_EQUIPMENT.map(
        (equipment) =>
        {
            return {
                equipment,
                is_present: _find_equipment(vehicle_equipment, equipment)
            }
        }
    )
}