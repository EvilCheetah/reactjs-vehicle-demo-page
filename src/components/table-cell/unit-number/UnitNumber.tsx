import './UnitNumber.css';


function UnitNumber({ unit_number, is_active, is_reserved }: { unit_number: string, is_active: boolean, is_reserved: boolean })
{
    return (
        <td className='unit-information'>
            <div className={`unit-number ${is_active ? 'active-unit' : 'not-active-unit'}`}>{unit_number}</div>
            <div className={`is-reserved ${is_reserved ? 'reserved' : 'not-reserved'}`}>{is_reserved ? '📕' : '📗'}</div>   
        </td>
    );
}


export default UnitNumber;