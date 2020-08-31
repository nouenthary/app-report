import React, {useEffect, useRef} from 'react';
import ReactToPrint from "react-to-print";
import {Button} from "antd";
import {PrinterOutlined} from '@ant-design/icons';
import "page/export/index.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {useWindowSize} from "../utils/useWindowSize";
import ReportDesigned from "./ReportDesigned";

const TableHidden: string = 'none';

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

    const [width] = useWindowSize();

    let textButton: string = 'Export'

    const btnExcel = "" +
        "<button id=\"btn-excel-sm\" type=\"button\" class=\"ant-btn ant-btn-primary\" style=\"background: rgb(40, 167, 69); border-color: rgb(40, 167, 69);\">" +
        "<span role=\"img\" aria-label=\"export\" class=\"anticon anticon-export\">" +
        "<svg viewBox=\"64 64 896 896\" focusable=\"false\" class=\"\" data-icon=\"export\" width=\"1em\" height=\"1em\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z\"/>" +
        "</svg>" +
        "</span>" +
        "<span id='btn-excel'>" + textButton + "</span>" +
        "</button>";

    useEffect(() => {
        document.querySelector('.btn-info')!.innerHTML = btnExcel;
        let btn = document.querySelector('#btn-excel-sm')!
        if (width < 720) {
            btn.setAttribute('class', 'ant-btn ant-btn-primary ant-btn-sm');
        }
    }, [btnExcel, width]);

    return (
        <>
            {ButtonPrint &&
            <ReactToPrint
                trigger={() =>
                    <Button
                        type={"default"}
                        size={width < 720 ? "small" : "middle"}
                    >
                        <PrinterOutlined/>{width < 720 ? null : 'Print'}
                    </Button>
                }
                content={() => componentRef}
            />}

            {ButtonExcel &&
            <ReactHTMLTableToExcel
                className="btn btn-info"
                table="report-import"
                filename="ReportExcel"
                sheet="Sheet"
                buttonText={''}
            />}
            <div style={{display: TableHidden}}>
                <ReportDesigned
                    getColumns={props.setColumn}
                    getDataSource={props.setDataSource}
                    ref={el => (componentRef = el)}
                />
            </div>
        </>
    )
}

export default ExportPrint;
