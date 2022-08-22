export function is_in_array(element_to_find: string, array: Array<string>): boolean
/// Checks whether `element_to_find` is in `array` case insensitively
{
    if ( !Array.isArray(array) )
    {   
        console.log('not array')
        return false;
    }

    return array.some( 
        (element) => ( element.toLowerCase() === element_to_find.toLowerCase() )
    );
}
