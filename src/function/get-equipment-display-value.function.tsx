import { faBiohazard, faPersonMilitaryPointing, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { equipment } from "../types/equipment.type";


export function get_equipment_display_value(equipment: equipment)
{
    switch (equipment)
    {
        /// Driver Related Values
        case 'Vaccine':
            return (
                <Tooltip
                    placement="top"
                    title="Vaccinated"
                    arrow
                >
                    <FontAwesomeIcon title="Vaccinated" icon={faSyringe} />
                </Tooltip>
            );

        case 'Haz-Mat':
            return (
                <Tooltip
                    placement="top"
                    title="Haz-Mat"
                    arrow
                >
                    <FontAwesomeIcon icon={faBiohazard} />
                </Tooltip>
            );

        case 'X-Border':
            return (
                <Tooltip
                    placement="top"
                    title="X-Border"
                    arrow
                >
                    <FontAwesomeIcon icon={faPersonMilitaryPointing} />
                </Tooltip>
            );

        /// Vehicle Related Values
        case 'Dock High':
            return 'Dock High';

        case 'Pallet Jack':
            return 'Pallet Jack';

        case 'E-Tracks':
            return 'E-Tracks';

        case 'Lift Gate':
            return 'Lift Gate';

        case 'Air Ride':
            return 'Air Ride';

        case 'Curtain Side':
            return 'Curtain Side';

        case 'Side Door':
            return 'Side Door';

        case 'PPE':
            return 'PPE';

        case 'Ramps':
            return 'Ramps';
        
        /// Fallback, in case the equipment was:
        /// - Never specified
        /// - Not yet implemented
        default:
            throw new Error(`Unable to find value for Specified Equipment ${equipment}`);
    }
}