import React, {useRef} from 'react';
import ReactToPrint from "react-to-print";
import {PrinterOutlined, ExportOutlined} from '@ant-design/icons';
import "page/export/index.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {useWindowSize} from "../utils/useWindowSize";
import ReportDesigned from "./ReportDesigned";
import {Menu, Dropdown, Button, Space} from 'antd';
import {SMALL_SCREEN} from "../../utils/constrans";
import ExportCSV from "./ExportCSV";
import {useTranslation} from "react-i18next";

const TableHidden: string = 'none';

interface ExportDocument {
    buttonPrint?: boolean;
    buttonExcel?: boolean;
    buttonCSV?: boolean;
    setColumn?: any;
    setDataSource?: any;
}

const ExportPrint = (props: ExportDocument) => {
    let {t} = useTranslation();
    let componentRef: any = useRef(null);
    let ButtonPrint: boolean = props.buttonPrint === false ? props.buttonPrint : true;
    let ButtonExcel: boolean = props.buttonExcel === false ? props.buttonExcel : true;
    let ButtonCSV: boolean = props.buttonCSV === false ? props.buttonCSV : true;

    const [width] = useWindowSize();

    const menu = (
        <Menu>
            {ButtonExcel &&
            <Menu.Item>
                <ReactHTMLTableToExcel
                    className="btn btn-info"
                    table="report-import"
                    filename="ReportExcel"
                    sheet="Sheet"
                    buttonText={'Excel'}
                />
            </Menu.Item>}
            {ButtonCSV &&
            <Menu.Item>
                <ExportCSV columns={props.setColumn} dataSource={props.setDataSource}/>
            </Menu.Item>
            }
        </Menu>
    );

    return (
        <>
            <Space>
                {ButtonPrint &&
                <ReactToPrint
                    trigger={() =>
                        <Button
                            type={"default"}
                            size={width < SMALL_SCREEN ? "small" : "middle"}
                        >
                            <PrinterOutlined/>{width < SMALL_SCREEN ? null : t('Print')}
                        </Button>
                    }
                    content={() => componentRef}
                />}

                <Dropdown overlay={menu}>
                    <Button type={"primary"}
                            size={width < SMALL_SCREEN ? "small" : "middle"}
                    >
                        <ExportOutlined/>{width < SMALL_SCREEN ? null : t('Export')}
                    </Button>
                </Dropdown>
            </Space>

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
