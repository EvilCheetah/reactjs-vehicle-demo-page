import { DriverEquipment } from "../types/driver-equipment.type";
import { VehicleEquipment } from "../types/vehicle-equipment.type";


export interface EquipmentPresense
{
    equipment:  DriverEquipment | VehicleEquipment;

    is_present: boolean;
}