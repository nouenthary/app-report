import React, {Component, useRef} from 'react';
import ReactToPrint from "react-to-print";
import {Button} from "antd";
import {PrinterOutlined} from '@ant-design/icons';
import "./index.css";

class ExportTablePrint extends Component<any, any> {

    getTableRow = (data: any) => {
        let row = [];
        for (let key in data) {
            row.push(<td>{data[key + ""]}</td>)
        }
        return row
    }

    render() {
        return (
            <>
                <table id="report-import">
                    <thead>
                    <tr>
                        {this.props.getColumns && this.props.getColumns.map((column: any) => (
                            <th>{column.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.getDataSource && this.props.getDataSource.map((item: any, index: number) => (
                        <tr key={item + index + 1}>
                            {this.getTableRow(item)}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}


const ExportPrint = (props: any) => {
    let componentRef: any = useRef(null);
    return (
        <>
            <ReactToPrint
                trigger={() => <Button type={"default"}><PrinterOutlined/> Print</Button>}
                content={() => componentRef}
            />
            <div style={{display: 'none'}}>
                <ExportTablePrint
                    getColumns={props.columns}
                    getDataSource={props.dataSource}
                    ref={el => (componentRef = el)}
                />
            </div>
        </>
    )
}

export default ExportPrint;