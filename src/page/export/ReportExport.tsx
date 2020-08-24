import React from "react";
import MainLayout from "components/Mainlayout";
import {Table, Tabs, List, Col, Row, Button, Space} from "antd";
import Faker from "faker";
import moment from "moment";
import {PrinterOutlined, ExportOutlined} from '@ant-design/icons';
import Print from "components/PrintTable";
import ExportExcel from "components/ExportExcel";
import ReportExportDetails from "./ReportExportDetails";
import {Container} from "components/Container";
import {useTranslation} from "react-i18next";

const data: any[] | undefined = [];

for (let i = 0; i < 50; i++) {
    data.push({
        key: Faker.random.number(),
        no: Faker.random.number(),
        invoice: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        amount: Faker.commerce.price(),
        description: "...",
        staff: Faker.name.firstName()
    });
}

const RowButtonPrint = () => {
    return (
        <>
            <Button><PrinterOutlined/></Button>
            <Space size={"large"}/>
            <Button><ExportOutlined/></Button>
        </>
    )
}

const ReportTable = () => {
    let {t} = useTranslation()

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
            <RowButtonPrint/>
            <Container>
                <Table columns={columns} dataSource={data} pagination={{pageSize: 10}} scroll={{x: 720}}/>
            </Container>
        </>
    )
}

const IncomeTable = () => {
    let faker = Faker

    let incomeDate = [];

    for (let x = 0; x < 20; x++) {
        incomeDate.push({
            name: faker.company.companyName(),
            barcode: 'PKG-' + faker.address.countryCode() + ' | SO-' + faker.address.zipCode(),
            date: moment(faker.date.future()).format('L'),
            price: faker.commerce.price()
        })
    }

    return (
        <Container>
            <List
                size="large"
                bordered
                dataSource={incomeDate}
                renderItem={income => <List.Item>

                    <Row style={{width: "100%"}}>
                        <Col span={18}>
                            <p>{income.name}</p><br/>
                            <p>{income.barcode}</p><br/>
                            <p>{income.date}</p>
                        </Col>
                        <Col span={6}>
                            <p style={{color: "salmon"}}>{income.price}</p><br/>
                            <p style={{color: "skyblue"}}>Payment</p>
                        </Col>
                    </Row>
                </List.Item>}
            />
        </Container>
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

                <Tabs.TabPane tab={"Income"} key={"2"}>
                    <IncomeTable/>
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