import './VehicleSupplies.css';
import SupplyCard from './SupplyCard';
import { Supplies } from "../../../interface/supplies.interface";


function VehicleSupplies({ supplies }: { supplies: Supplies })
{
    return (
        <td>
            <div className="supplies">
                {
                   Object.entries(supplies).map(
                    ([supply_name, quantity]) =>
                    (<SupplyCard supply_name={supply_name} quantity={quantity} />)
                   )
                }
            </div>
        </td>
    );
}


export default VehicleSupplies;