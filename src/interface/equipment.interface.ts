import { VehicleEquipment } from "../types/vehicle-equipment.type";


export interface EquipmentPresense
{
    equipment: VehicleEquipment;

    is_present: boolean;
}