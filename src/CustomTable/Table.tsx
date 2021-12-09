import "./Table.scss";
import React from "react";

interface TableProps<T> {
    caption?: string,
    thead: string[],
    data: T,
    getTableRows: (data: T) => (string | number)[][],
}

function Table<T>({caption, thead, getTableRows, data}: TableProps<T>) {

    const preparedData = getTableRows(data);

    return <div className={"table-wrap"} >
        <table>
            <caption>{caption}</caption>
            <thead>
            <tr>
                { thead.length && thead.map(colTitle => <td key={colTitle}>{colTitle}</td>)}
            </tr>
            </thead>
            <tbody>
            {preparedData.map(row =>
                <tr>
                    {row.map(colName => <td>{colName}</td>)}
                </tr>
            )}
            </tbody>
        </table>
    </div>
}

export default Table;