import React from "react";
import MainLayout from "components/layout/Mainlayout";
import Faker from "faker";
import moment from "moment";
import {Card, Table} from "antd";
import {Container} from "components/utils/Container";
import {useTranslation, withTranslation} from "react-i18next";
import ExportPrint from "../export/ExportPrint";
import {Link} from 'react-router-dom';

const data: any[] | undefined = [];

for (let i = 0; i < 50; i++) {
    data.push({
        no: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        amount: Faker.commerce.price(),
        description: "Note...",
        importType: "Import",
        staff: Faker.name.firstName()
    });
}

const RowButtonPrint = (props: any) => {
    return (
        <ExportPrint setColumn={props.columns} setDataSource={props.dataSource}/>
    )
}


const ReportImportTable = () => {
    let {t} = useTranslation();
    const columns = [
        {
            title: t('No'),
            dataIndex: 'no',
            width: 100,
            render: (text: React.ReactNode) => (<Link to={'/reportImportDetails/' + 24023}>{text}</Link>)
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
        <>
            <Card>
                <RowButtonPrint columns={columns} dataSource={data}/>
            </Card>
            <Container>
                <Table columns={columns} dataSource={data} rowKey={'no'} pagination={{pageSize: 10}} scroll={{x: 720}}/>
            </Container>
        </>
    )
}

const ReportImport = () => {
    return (
        <MainLayout>
            <ReportImportTable/>
        </MainLayout>
    )
}

export default withTranslation()(ReportImport);
