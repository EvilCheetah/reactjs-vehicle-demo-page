import './PlannedToolTip.css';


function PlannedToolTip({ pro_number, owner }: any)
{
    return (
        <>
            <div className="pro-number-tool-tip">
                <div className="pre-fix">PRO #: </div>
                <div className="pro-number">{pro_number}</div>
            </div>
            <div className="owner">
                <div className="pre-fix">Owner: </div>
                <div className="owner-name">{owner}</div>
            </div>
        </>
    )
}


export default PlannedToolTip;