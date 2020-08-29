import React from 'react';
import Faker from "faker";
import moment from "moment";
import {useTranslation} from "react-i18next";
import {Table} from "antd";
import {Container} from "components/utils/Container";
import MainLayout from "components/layout/Mainlayout";
import {PAGINATION} from "../../utils/constrans";
import {rowSelection} from "../customer";

let data: any[] | undefined = [];

for (let i = 0; i < 20; i++) {
    data.push({
        key: Faker.random.number(),
        no: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        productType: "Tab",
        productName: Faker.commerce.productName(),
        amount: Faker.commerce.price(),
        importType: "Import",
        staff: Faker.name.firstName()
    });
}

const ReportExportDetails = () => {

    const {t} = useTranslation();
    const column = [
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
            title: t('Product Type'),
            dataIndex: 'productType',
            width: 100,
        },
        {
            title: t('Product Name'),
            dataIndex: 'productName',
            width: 100,
        },
        {
            title: t('Amount'),
            dataIndex: 'amount',
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
        <MainLayout>
            <Container>
                <Table size={"small"} columns={column} dataSource={data} pagination={{pageSize: PAGINATION}}
                       scroll={{x: 720}} bordered
                       rowSelection={{
                           ...rowSelection
                       }}
                />
            </Container>
        </MainLayout>
    )
}

export default ReportExportDetails;