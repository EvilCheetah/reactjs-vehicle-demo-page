export function is_in_the_past(date: string)
{
    return (new Date(date) < new Date());
}