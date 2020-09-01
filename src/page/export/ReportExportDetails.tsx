import React from 'react';
import {useTranslation} from "react-i18next";
import {Table} from "antd";
import {Container} from "components/utils/Container";
import MainLayout from "components/layout/Mainlayout";
import {PAGINATION} from "../../utils/constrans";
import {rowSelection} from "../customer";

let data: any[] | undefined = [];

for (let i = 1; i < 20; i++) {
    data.push({
        key: i,
        _id: i,
        date: '11-12-20',
        time: '4:41:22 PM',
        productType: "Tab",
        productName: "Vivo",
        amount: 12 + i,
        importType: "Import",
        staff: 'Carmel'
    });
}

const ReportExportDetails = () => {

    const {t} = useTranslation();
    const column = [
        {
            title: t('No'),
            dataIndex: '_id',
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
                       bordered
                       rowSelection={{
                           ...rowSelection
                       }}
                       scroll={{x: 720, y: 'calc(85vh - 4em)'}}
                />
            </Container>
        </MainLayout>
    )
}

export default ReportExportDetails;