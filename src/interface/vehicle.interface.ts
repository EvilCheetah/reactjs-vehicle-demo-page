import { VehicleEquipment } from "../types/vehicle-equipment.type";
import { VehicleType } from "../types/vehicle-type.type";
import { Dimensions2D } from "./2d-dimensions.interface";
import { Dimensions3D } from "./3d-dimensions.interface";
import { Driver } from "./driver.interface";
import { Status } from "./status.interface";
import { Supplies } from "./supplies.interface";


export interface Vehicle
{
    unit_id:            string;

    is_active:          boolean;

    is_reserved:        boolean;
    
    unit_number:        string;

    drivers:            Driver[];

    vehicle_type:       VehicleType;

    payload:            number;

    box_dimensions:     Dimensions3D;

    door_dimensions:    Dimensions2D;

    equipment:          VehicleEquipment[];

    supplies:           Supplies;

    status_information: Status;
}