import './VehicleEquipment.css';
import { Equipment } from "../../../types/vehicle-equipment.type";
import { get_equipment_presense } from "../../../function/get-equipment.function";
import { get_item_visibility } from "../../../function/get-item-visibility.function";


function VehicleEquipment({ equipments }: { equipments: Equipment[] })
{
    const equipment_list = get_equipment_presense(equipments);

    return (
        <td>
            <div className="equipment-list">
                {
                    equipment_list.map(
                        ({ equipment, is_present }) =>
                        {
                            return (
                                <div 
                                    key={`${equipment.toLowerCase().replaceAll(' ', '')}`}
                                    className={`equipment ${get_item_visibility(is_present)}`}
                                >
                                    { equipment }
                                </div>
                            );
                        }
                    )
                }
            </div>
        </td>
    );
}


export default VehicleEquipment;