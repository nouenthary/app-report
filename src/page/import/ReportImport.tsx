import React from "react";
import MainLayout from "components/Mainlayout";
import Faker from "faker";
import moment from "moment";
import {Table, Tabs} from "antd";
import {Container} from "components/Container";
import {useTranslation, withTranslation} from "react-i18next";
import ReportImportDetails from "./ReportImportDetails";

const data: any[] | undefined = [];

for (let i = 0; i < 50; i++) {
    data.push({
        key: Faker.random.number(),
        no: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        amount: Faker.commerce.price(),
        description: "Note...",
        importType: "Import",
        staff: Faker.name.firstName()
    });
}

const ReportImportTable = () => {
    let {t} = useTranslation();
    const columns = [
        {
            title: t('No'),
            dataIndex: 'no',
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
            title: t('Import Type'),
            dataIndex: 'importType',
            width: 100,
        },
        {
            title: t('Staff'),
            dataIndex: 'staff',
            width: 100,
        },
    ];
    return (
        <Container>
            <Table columns={columns} dataSource={data} pagination={{pageSize: 10}} scroll={{x: 720}}/>
        </Container>
    )
}

const ReportImport = () => {
    return (
        <MainLayout>

            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={"Import"} key={'1'}>
                    <ReportImportTable/>
                </Tabs.TabPane>

                <Tabs.TabPane tab={"Details"} key={'2'}>
                    <ReportImportDetails/>
                </Tabs.TabPane>
            </Tabs>

        </MainLayout>
    )
}

export default withTranslation()(ReportImport);
