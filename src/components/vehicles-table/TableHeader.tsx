import { TableHeaderProps } from "../../interface/props/table-header-props.interface";


function TableHeader({ headers }: TableHeaderProps)
{
    return (
        <thead>
            <tr>
            {
                headers.map(
                    (header: string) => ( <th key={header.toLocaleLowerCase()}>{header}</th> )
                )
            }
            </tr>
        </thead>
    );
}


export default TableHeader;