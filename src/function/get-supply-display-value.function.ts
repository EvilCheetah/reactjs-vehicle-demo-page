export function get_supply_display_value(supply_name: string)
{
    switch (supply_name)
    {
        case 'blankets':
            return 'Blankets';

        case 'straps':
            return 'Straps';

        case 'load_bars':
            return 'Load Bars';

        default:
            throw new Error(`Supply with name: ${supply_name} was NOT FOUND`)
    }
}