import "./Table.scss";
import React, {ReactNode} from "react";

interface TableProps<T> {
    caption?: string,
    thead: ReactNode[],
    data: T,
    getTableRows: (data: T) => (string | number)[][],
}

const TableCell: React.FC<{ data: ReactNode }> = ({data}) => {
    return <td>{data}</td>
}

const TableHead: React.FC<{ thead: ReactNode[] }> = ({thead}) => {
    return <thead>
    <tr>
        {thead.length && thead.map((colTitle, index) => <TableCell key={`${thead.length}_${index}`} data={colTitle}/>)}
    </tr>
    </thead>
}

const TableRow: React.FC<{ rowData: (string | number)[] }> = ({rowData}) => {
    return <tr>
        {rowData.map((colName, index) => <TableCell key={`${colName}_${index}`} data={colName}/>)}
    </tr>
}


function Table<T>({caption, thead, getTableRows, data}: TableProps<T>) {
    const preparedData = getTableRows(data);
    return <div className={"table-wrap"}>
        <table>
            <caption>{caption}</caption>
            <TableHead thead={thead}/>
            <tbody>{preparedData.map(row => <TableRow key={row.toString()} rowData={row}/>)}</tbody>
        </table>
    </div>
}

export default Table;