import { Name } from "../../interface/name.interface";


function DriverName({ name }: { name: Name })
{
    const { first, middle, last } = name;

    return (
        <div className="name">
            <div className="first-name">{first}</div>
            {' '}
            <div className="middle-name">{middle}</div>
            {' '}
            <div className="last-name">{last}</div>
        </div>
    );
}


export default DriverName;