import { get_item_visibility } from "../../../function/get-item-visibility.function";


function Straps({ straps }: { straps: number})
{
    return (
        <div className={`supply straps ${get_item_visibility(straps > 0)}`}>
            <div className="supply-name">Straps:</div>
            <div className="quantity">{straps}</div>
        </div>
    );
}


export default Straps;