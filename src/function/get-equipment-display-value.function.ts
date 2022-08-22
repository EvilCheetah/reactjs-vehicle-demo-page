import { equipment } from "../types/equipment.type";


export function get_equipment_display_value(equipment: equipment)
{
    switch (equipment)
    {
        /// Driver Related Values
        case 'Vaccine':
            return '💉';

        case 'Haz-Mat':
            return '☣️';

        case 'X-Border':
            return '🛃';

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