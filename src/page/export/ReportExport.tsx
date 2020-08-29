import React from "react";
import MainLayout from "components/layout/Mainlayout";
import {Table, Card} from "antd";
import Faker from "faker";
import moment from "moment";
import {Container} from "components/utils/Container";
import {useTranslation} from "react-i18next";
import ExportPrint from "components/Table/ExportPrint";
import {PAGINATION} from "../../utils/constrans";
import TableCustom from "../../components/Table/TableCustom";
import {rowSelection} from "../customer";


export const RowButtonPrint = (props: any) => {
    return (
        <ExportPrint setColumn={props.columns} setDataSource={props.dataSource}/>
    )
}

const ReportTable = () => {
    let {t} = useTranslation();

    const columns = [
        {
            title: t('No'),
            dataIndex: 'no',
            width: 100,
            render: (text: React.ReactNode) => <a href={"/ReportExportDetails/" + 1276923}>{text}</a>
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

    const data: any[] | undefined = [];

    for (let i = 0; i < 100; i++) {
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

    return (
        <>
            <Card>
                <RowButtonPrint columns={columns} dataSource={data}/>
            </Card>
            <Container>
                <Table bordered size={'small'} columns={columns} dataSource={data} rowKey={"no"}
                       pagination={{pageSize: PAGINATION}} scroll={{x: 720}}
                       rowSelection={{
                           ...rowSelection
                       }}/>
            </Container>
        </>
    )
}


const ReportExport = () => {
    return (
        <MainLayout>
            <ReportTable/>
        </MainLayout>
    )
}


export default ReportExport;