import EquipmentCard from "../equipment-card/EquipmentCard";
import { get_equipment_presense } from "../../function/get-equipment.function";
import { DRIVER_EQUIPMENT } from "../../constant/driver-equipment.constant";
import { DriverEquipment as Equipment } from "../../types/driver-equipment.type";


function DriverEquipment({ equipment }: { equipment: Equipment[] })
{
    const driver_equipment = get_equipment_presense(equipment, [...DRIVER_EQUIPMENT]);

    return (
        <div className="driver-equipment">
        {
            driver_equipment.map(
                (equipment_item) => {
                    return (
                        <>
                            <EquipmentCard
                                key={equipment_item.equipment}
                                class_name='driver-equipment-item'
                                equipment={equipment_item} 
                            />
                        </>
                    );
                }
            )
        }
        </div>
    );
}


export default DriverEquipment;