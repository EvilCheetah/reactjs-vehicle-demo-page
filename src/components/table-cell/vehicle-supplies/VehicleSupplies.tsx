import './VehicleSupplies.css';
import Straps from "./Straps";
import Blankets from "./Blankets";
import { Supplies } from "../../../interface/supplies.interface";


function VehicleSupplies({ supplies }: { supplies: Supplies })
{
    return (
        <td>
            <div className="supplies">
                <Blankets blankets={supplies.blankets} />
                <Straps   straps={supplies.straps} />
            </div>
        </td>
    );
}


export default VehicleSupplies;