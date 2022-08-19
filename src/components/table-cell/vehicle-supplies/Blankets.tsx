import { get_item_visibility } from "../../../function/get-item-visibility.function";


function Blankets({ blankets }: { blankets: number })
{
    return (
        <div className={`supply blankets ${get_item_visibility(blankets > 0)}`}>
            <div className="supply-name">Blankets:</div>
            <div className="quantity">{blankets}</div>
        </div>
    );
}


export default Blankets;