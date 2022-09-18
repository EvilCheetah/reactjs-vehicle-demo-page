import './ReserveInformation.css';
import { useEffect, useState } from "react";
import { User } from '../../../interface/user.interface';


function ReserveInformation({ reserved_by, reserved_until }: {reserved_by: string, reserved_until: string})
{
    const [timeRemains, setTimeRemains] = useState(new Date().valueOf());

    useEffect(
        () =>
        {
            const interval = setInterval(
                () =>
                {
                    setTimeRemains( (new Date(reserved_until)).valueOf() - (new Date()).valueOf() )
                },
                1000
            )

            return () => clearInterval(interval);
        }, 
        [timeRemains]
    );

    return (
        <div className="reservation-info">
            <div className="reserved-by">
                <div className="reserved-placeholder">
                    User:
                </div>
                <div className="reserved-name">
                        {reserved_by}
                </div>
            </div>
            <div className="reserved-until">
                <div className="reserved-until-placeholder">
                    Time Remaining:
                </div>
                <div className="remaining-time">
                    {timeRemains / 1000} sec
                </div>
            </div>
        </div>
    );
}


export default ReserveInformation;