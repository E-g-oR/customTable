import "./Table.scss";
import React from "react";

interface TableProps<T> {
    caption?: string,
    thead: string[],
    data: T,
    getTableRows: (data: T) => (string | number)[][],
}


const TableHead: React.FC<{ thead: string[] }> = ({thead}) => {
    return <thead>
    <tr>
        {thead.length && thead.map(colTitle => <td key={colTitle}>{colTitle}</td>)}
    </tr>
    </thead>
}

const TableRow: React.FC<{ rowData: (string | number)[] }> = ({rowData}) => {
    return <tr>
        {rowData.map((colName, index) => <td key={`${colName}_${index}`}>{colName}</td>)}
    </tr>
}


function Table<T>({caption, thead, getTableRows, data}: TableProps<T>) {
    const preparedData = getTableRows(data);
    return <div className={"table-wrap"}>
        <table>
            <caption>{caption}</caption>
            <TableHead thead={thead}/>
            <tbody>
            {preparedData.map(row => <TableRow key={row.toString()} rowData={row}/>)}
            </tbody>
        </table>
    </div>
}

export default Table;