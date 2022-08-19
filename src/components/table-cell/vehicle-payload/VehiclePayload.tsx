function VehiclePayload({ payload }: { payload: number })
{
    return (
        <td className="vehicle-payload">
            { payload.toLocaleString() }
        </td>
    );
}


export default VehiclePayload;