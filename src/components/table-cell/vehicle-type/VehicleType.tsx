import { VehicleInformationProps } from '../../../interface/props/vehicle-information-props.interface';
import BoxDimensions from './BoxDimensions';
import DoorDimensions from './DoorDimensions';
import './VehicleType.css';


function VehicleType({ vehicle_type, box_dimensions, door_dimensions }: VehicleInformationProps)
{
    return (
        <td 
            className={`vehicle-type ${vehicle_type.toLowerCase().replaceAll(' ', '-')}`}
        >
            <div className="type">
                {vehicle_type}
            </div>
            <BoxDimensions box_dimensions={box_dimensions} />
            <DoorDimensions door_dimensions={door_dimensions} />
        </td>
    );
}


export default VehicleType;