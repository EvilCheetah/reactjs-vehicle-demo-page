import { pad_with_spaces } from "../../../function/pad-number-with-spaces.function";
import { Dimensions2D } from "../../../interface/2d-dimensions.interface";


function DoorDimensions({ door_dimensions }: { door_dimensions: Dimensions2D })
{
    const { width, height } = door_dimensions;

    return (
        <div className="door-dimensions">
            <div className="door-info placeholder">Door:</div>
            <div className="dimensions">
                <div className="info width">{ pad_with_spaces(width) }</div>
                {' x '}
                <div className="info height">{ pad_with_spaces(height) }</div>
            </div>
        </div>
    );
}


export default DoorDimensions;