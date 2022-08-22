import { EquipmentPresense } from "../interface/equipment.interface";
import { equipment } from "../types/equipment.type";
import { is_in_array } from "./is-in-array.function";


export function get_equipment_presense(
    existing_equipment: Array<equipment>, 
    eqipment_to_match:  Array<equipment>
): EquipmentPresense[]
/// Converts an Array of included Equipment to
/// Array of Objects of All Possible eqipment
{
    return eqipment_to_match.map(
        (equipment) =>
        {
            return {
                equipment,
                is_present: is_in_array(equipment, existing_equipment)
            }
        }
    )
}