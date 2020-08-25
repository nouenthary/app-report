import React, {Component, useRef} from 'react';
import ReactToPrint from "react-to-print";
import {Button} from "antd";
import {PrinterOutlined, ExportOutlined} from '@ant-design/icons';
import "./index.css";
import styled from 'styled-components';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ReportTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
`;

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

const TableHidden: string = 'none';

class ExportTablePrint extends Component<any, any> {

    getTableRow = (data: any) => {
        let row: any = [];
        let number = 1
        for (let key in data) {
            row.push(<td key={data.key + number++}>{data[key + ""]}</td>)
        }
        return row
    }

    render() {
        return (
            <div>
                <ReportTitle>
                    Report Export Products
                    <Text>Welcome to our report...</Text>
                </ReportTitle>
                <table id="report-import">
                    <thead>
                    <tr style={{background: "#ddd"}}>
                        {this.props.getColumns && this.props.getColumns.map((column: any) => (
                            <th key={column.title}>{column.title}</th>
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
            </div>
        );
    }
}

interface ExportDocument {
    buttonPrint?: boolean;
    buttonExcel?: boolean;
    setColumn?: any;
    setDataSource?: any;
}

const ExportPrint = (props: ExportDocument) => {
    let componentRef: any = useRef(null);
    let ButtonPrint: boolean = props.buttonPrint === false ? props.buttonPrint : true;
    let ButtonExcel: boolean = props.buttonExcel === false ? props.buttonExcel : true;
    return (
        <>
            {ButtonPrint &&
            <ReactToPrint
                trigger={() => <Button type={"default"}><PrinterOutlined/> Print</Button>}
                content={() => componentRef}
            />}

            {ButtonExcel &&
            <ReactHTMLTableToExcel
                className="btn btn-info"
                table="report-import"
                filename="ReportExcel"
                sheet="Sheet"
                buttonText={<Button type={"primary"} style={{
                    background: '#28A745',
                    borderColor: '#28A745'
                }}>
                    <ExportOutlined/> Export</Button>}
            />}

            <div style={{display: TableHidden}}>
                <ExportTablePrint
                    getColumns={props.setColumn}
                    getDataSource={props.setDataSource}
                    ref={el => (componentRef = el)}
                />
            </div>
        </>
    )
}

export default ExportPrint;