export function get_item_visibility(is_included: boolean): string
{
    return is_included ? 'included' : 'absent'
}