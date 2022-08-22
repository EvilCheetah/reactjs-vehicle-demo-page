import { get_visibility } from "../../../function/get-visibility.function";
import { get_supply_display_value } from "../../../function/get-supply-display-value.function";


function SupplyCard({ supply_name, quantity }: { supply_name: string, quantity: number })
{
    return (
        <div
            className={
                `supply-item `                                           +
                `${supply_name.toLowerCase().replaceAll(/_/gi, '-')} `   +
                `${get_visibility(quantity > 0)}`
            }
        >
            <div className="supply-name">{get_supply_display_value(supply_name)}:</div>
            <div className="quantity">{quantity}</div>
        </div>
    );
}


export default SupplyCard;