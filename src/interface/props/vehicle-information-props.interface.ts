import { Dimensions2D } from "../2d-dimensions.interface";
import { Dimensions3D } from "../3d-dimensions.interface";


export interface VehicleInformationProps
{
    vehicle_type: string;

    box_dimensions: Dimensions3D;

    door_dimensions: Dimensions2D;
}