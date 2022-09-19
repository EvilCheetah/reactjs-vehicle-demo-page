import './VehicleEquipment.css';
import EquipmentCard from '../../equipment-card/EquipmentCard';
import { VEHICLE_EQUIPMENT } from '../../../constant/vehicle-equipment.constant';
import { get_equipment_presense } from "../../../function/get-equipment.function";
import { VehicleEquipment as Equipment } from "../../../types/vehicle-equipment.type";


function VehicleEquipment({ existing_equipment }: { existing_equipment: Equipment[] })
{
    const equipment_list = get_equipment_presense(existing_equipment, [...VEHICLE_EQUIPMENT]);

    return (
        <td>
            <div className="vehicle-equipment">
                {
                    equipment_list.map(
                        (equipment) => (
                            <EquipmentCard
                                key={equipment.equipment}
                                class_name='vehicle-equipment-item'
                                equipment={equipment}
                            />
                        )
                    )
                }
            </div>
        </td>
    );
}


export default VehicleEquipment;