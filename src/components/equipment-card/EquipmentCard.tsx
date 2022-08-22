import { get_equipment_display_value } from "../../function/get-equipment-display-value.function";
import { get_visibility } from "../../function/get-visibility.function";
import { EquipmentCardProps } from "../../interface/props/equipment-card-props.interface";


function EquipmentCard({ class_name, equipment }: EquipmentCardProps)
{
    return (
        <div
            className={
                `item `                                                         +
                `${class_name} `                                                + 
                `${equipment.equipment.toLowerCase().replaceAll(/\s/gi, '-')} ` +
                `${get_visibility(equipment.is_present)}`
            }
        >
            {get_equipment_display_value(equipment.equipment)}
        </div>
    )
}


export default EquipmentCard;