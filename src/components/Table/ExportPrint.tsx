import React, {Component, useRef} from 'react';
import ReactToPrint from "react-to-print";
import {Button} from "antd";
import {PrinterOutlined} from '@ant-design/icons';
import "page/export/index.css";
import styled from 'styled-components';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {v4} from 'uuid';

const ReportTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  text-align: center;
`;

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

const TableHidden: string = 'none';

const btnExcel = "<button type=\"button\" class=\"ant-btn ant-btn-primary\" style=\"background: rgb(40, 167, 69); border-color: rgb(40, 167, 69);\"><span role=\"img\" aria-label=\"export\" class=\"anticon anticon-export\"><svg viewBox=\"64 64 896 896\" focusable=\"false\" class=\"\" data-icon=\"export\" width=\"1em\" height=\"1em\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z\"/></svg></span><span>Export</span></button>";

class ExportTablePrint extends Component<any, any> {

    getTableRow = (data: any) => {
        let row: any = [];
        for (let key in data) {
            row.push(<td key={v4() + ''}>{data[key + '']}</td>)
        }
        return row
    }

    render() {
        return (
            <div>
                <ReportTitle>
                    Report Export Products
                    <Text>Welcome to our report...</Text>
                    <hr style={{border: "0.5px solid #d9d9d9"}}/>
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

    React.useEffect(() => {
        document.querySelector('.btn-info')!.innerHTML = btnExcel;
    }, []);

    return (
        <>
            {ButtonPrint &&
            <ReactToPrint
                trigger={() => <Button type={"default"}><PrinterOutlined/> Print</Button>}
                content={() => componentRef}
            />}

            {/*<Button type={"primary"} style={{background: '#28A745', borderColor: '#28A745'}}><ExportOutlined/>Export</Button>*/}

            {ButtonExcel &&
            <ReactHTMLTableToExcel
                className="btn btn-info"
                table="report-import"
                filename="ReportExcel"
                sheet="Sheet"
                buttonText={''}
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

// const newButton = document.createElement('button');
// newButton.setAttribute('type', 'button');
// newButton.setAttribute('class', 'ant-btn ant-btn-primary');
// newButton.setAttribute('style', 'background: rgb(40, 167, 69); border-color: rgb(40, 167, 69)');
//
// let spanText = document.createElement('span');
// spanText.innerText = 'Export';
//
// let span = document.createElement('span');
// span.setAttribute('role', 'img');
// span.setAttribute('aria-label', 'export');
// span.setAttribute('class', 'anticon anticon-export');
//
// let svg = document.createElement('svg')
// svg.setAttribute('viewBox', '64 64 896 896')
// svg.setAttribute('focusable', 'false')
// svg.setAttribute('class', '')
// svg.setAttribute('fill', 'currentColor')
// svg.setAttribute('width', '1em')
// svg.setAttribute('height', '1em')
// svg.setAttribute('aria-hidden', 'true')
// svg.setAttribute('data-icon', 'export')
//
// let path = document.createElement('path')
// path.setAttribute('d', 'M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z')
//
// svg.appendChild(path)
//
// span.appendChild(svg)
//
// newButton.appendChild(span)
// newButton.appendChild(spanText)
// console.log(newButton)