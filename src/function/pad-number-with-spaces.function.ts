export function pad_with_spaces(num: number): string
{
    return ('    ' + num.toString()).slice(-3);
}