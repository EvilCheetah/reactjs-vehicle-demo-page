import { DriverEquipment } from "../types/driver-equipment.type";
import { Name } from "./name.interface";


export interface Driver
{
    id:            string;

    name:          Name;

    phone_number:  string;

    equipment:     DriverEquipment[]
}