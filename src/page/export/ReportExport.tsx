import React from "react";
import MainLayout from "components/Mainlayout";
import {Table, Tabs, Button, Space, Card} from "antd";
import Faker from "faker";
import moment from "moment";
import {PrinterOutlined, ExportOutlined} from '@ant-design/icons';
import Print from "components/PrintTable";
import ExportExcel from "components/ExportExcel";
import ReportExportDetails from "./ReportExportDetails";
import {Container} from "components/Container";
import {useTranslation} from "react-i18next";
import ExportPrint from "./ExportPrint";

const data: any[] | undefined = [];

for (let i = 0; i < 50; i++) {
    data.push({
        no: Faker.random.number(),
        invoice: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        amount: Faker.commerce.price(),
        description: "Note...",
        staff: Faker.name.firstName()
    });
}

const RowButtonPrint = (props: any) => {
    return (
        <>
            <Button type={"default"}><PrinterOutlined/> Print</Button>
            <Space size={"large"}/>
            <Button><ExportOutlined/> Export</Button>
            <ExportPrint columns={props.columns} dataSource={props.dataSource}/>
        </>
    )
}

const ReportTable = () => {
    let {t} = useTranslation();

    const columns = [
        {
            title: t('No'),
            dataIndex: 'no',
            width: 100,
        },
        {
            title: t('Invoice'),
            dataIndex: 'invoice',
            width: 100,
        },
        {
            title: t('Date'),
            dataIndex: 'date',
            width: 100,
        },
        {
            title: t('Time'),
            dataIndex: 'time',
            width: 100,
        },
        {
            title: t('Amount'),
            dataIndex: 'amount',
            width: 100,
        },
        {
            title: t('Description'),
            dataIndex: 'description',
            width: 100,
        },
        {
            title: t('Staff'),
            dataIndex: 'staff',
            width: 100,
        },
    ];

    return (
        <>
            <Card>
                <RowButtonPrint columns={columns} dataSource={data}/>
            </Card>
            <br/>
            <Container>
                <Table columns={columns} dataSource={data} pagination={{pageSize: 10}} scroll={{x: 720}}/>
            </Container>
        </>
    )
}


const ReportExport = () => {

    return (
        <MainLayout>
            <Tabs defaultActiveKey="1">

                <Tabs.TabPane tab={"ReportExport"} key={"1"}>
                    <ReportTable/>
                </Tabs.TabPane>

                <Tabs.TabPane tab={"ReportExportDetails"} key="5">
                    <ReportExportDetails/>
                </Tabs.TabPane>

                <Tabs.TabPane tab={"Print"} key={"3"}>
                    <Print/>
                </Tabs.TabPane>

                <Tabs.TabPane tab={"Excel"} key={"4"}>
                    <ExportExcel/>
                </Tabs.TabPane>

            </Tabs>
        </MainLayout>
    )
}


export default ReportExport;