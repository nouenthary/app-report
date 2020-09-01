import React from "react";
import {CSVLink} from "react-csv";

interface ColumnHeader {
    key: string;
    label: string;
}

interface ExportCSVProps {
    columns: any;
    dataSource: any;
}

const mapColumns = (columns: any) => {
    const cols: ColumnHeader[] = [];
    columns.map((col: any) => {
        return cols.push({
            key: col.dataIndex,
            label: col.title
        })
    });
    return cols
}

const ExportCSV = (props: ExportCSVProps) => {
    const cols = mapColumns(props.columns);
    return (
        <CSVLink data={props.dataSource} headers={cols}>
            <span style={{paddingRight: 5}}/>CSV
        </CSVLink>
    )
}

export default ExportCSV;