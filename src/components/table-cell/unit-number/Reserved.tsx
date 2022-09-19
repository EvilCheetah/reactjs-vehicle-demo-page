import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { faKey, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { is_reserved } from "../../../function/is-reserved.function";
import ReserveInformation from "./ReserveInformation";


function Reserved({ reserve }: any)
{
    // const reserved_by = (user_list as User[]).find( (user) => (reserve.reserved_by === user.user_id) );
    const [isReserved, setIsReserved] = useState(false);

    const reserved_until = reserve.until,
          reserved_by = reserve.reserved_by;

    useEffect(
        () =>
        {
            const interval = setInterval(
                () =>
                {
                    setIsReserved(is_reserved(reserved_by, reserved_until))
                },
                1000
            )

            return () => clearInterval(interval);
        }, 
        [isReserved]
    );

    return (
        <div className={`is-reserved ${is_reserved(reserved_by, reserved_until) ? 'reserved' : 'not-reserved'}`}>
        {
            is_reserved(reserved_by, reserved_until)? 
                <Tooltip
                    title={<ReserveInformation reserved_by={reserved_by} reserved_until={reserved_until} />}
                    placement="top"
                    arrow
                >
                    <FontAwesomeIcon icon={faLock} />
                </Tooltip> : 
                <FontAwesomeIcon icon={faKey} />
        }
        </div>
    );
}


export default Reserved;