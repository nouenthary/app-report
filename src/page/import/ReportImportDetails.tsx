import React from 'react';
import {Table} from "antd";
import {useTranslation} from "react-i18next";
import {Container} from "components/utils/Container";
import MainLayout from "components/layout/Mainlayout";
import {rowSelection} from "../customer";
import {PAGINATION} from "../../utils/constrans";

const data: any[] | undefined = [];

for (let i = 0; i < 25; i++) {
    data.push({
        key: i,
        no: i,
        date: '11-11-20',
        time: '11:54:21 AM',
        productType: "Tab",
        productName: "VIVO",
        amount: 234 + i,
        importType: "Import",
        staff: 'Private'
    });
}

const ReportImportDetails = () => {
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
                <Table size={"small"} columns={columns} dataSource={data} pagination={{pageSize: PAGINATION}}
                       rowSelection={{
                           ...rowSelection
                       }}
                       bordered
                       scroll={{x: 720, y: 'calc(85vh - 4em)'}}
                />
            </Container>
        </MainLayout>
    );
}

export default ReportImportDetails;