import { pad_with_spaces } from "../../../function/pad-number-with-spaces.function";
import { Dimensions3D } from "../../../interface/3d-dimensions.interface";



function BoxDimensions({ box_dimensions }: { box_dimensions: Dimensions3D } )
{
    const { length, width, height } = box_dimensions;

    return (
        <div className="box-dimensions">
            <div className="box-info placeholder">Box:</div>
            <div className="dimensions">
                <div className="info length">{ pad_with_spaces(length) }</div>
                {' x '}
                <div className="info width">{ pad_with_spaces(width) }</div>
                {' x '}
                <div className="info height">{ pad_with_spaces(height) }</div>
            </div>
        </div>
    );
}


export default BoxDimensions;