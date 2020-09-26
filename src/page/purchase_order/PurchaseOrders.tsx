import React, {useEffect, useState} from 'react';
import MainLayout from "components/layout/Mainlayout";
import TableCustom from "components/Table/TableCustom";
import {fetchApi} from "../../utils/base_url";
import {message} from "antd";
import {PurchaseOrder} from "models/PurchaseOrder";
import {useTranslation} from "react-i18next";

const PurchaseOrders = () => {
    const {t} = useTranslation();
    const [state, setState] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchApi("/purchases", "GET")
            .then(r => {
                return r.json()
            })
            .then(resp => {
                const purchases: PurchaseOrder[] = [];
                resp.data.map((purchase: any) => {
                    return purchases.push({
                        _id: purchase._id,
                        date: purchase.date,
                        type: purchase.import_status,
                        purchase_number: purchase.purchase_number ? purchase.purchase_number : 'N/A',
                        supplier: purchase.supplier.name,
                        phone_number: purchase.supplier.phone,
                        created_by: purchase.staff.name
                    })
                });
                setState(purchases);
                setLoading(false);
            })
            .catch(error => {
                message.error(error + '', 50);
            });
    }, []);

    const columns = [
        {
            key: '_id',
            dataIndex: '_id',
            title: t('No'),
            width: 200
        },
        {
            key: 'date',
            dataIndex: 'date',
            title: t('Date'),
            width: 200
        },
        {
            key: 'type',
            dataIndex: 'type',
            title: t('Type'),
            width: 200
        },
        {
            key: 'purchase_number',
            dataIndex: 'purchase_number',
            title: t('Purchase Number'),
            width: 200
        },
        {
            key: 'supplier',
            dataIndex: 'supplier',
            title: t('Supplier'),
            width: 200
        },
        {
            key: 'phone_number',
            dataIndex: 'phone_number',
            title: t('Phone'),
            width: 200
        },
        {
            key: 'created_by',
            dataIndex: 'created_by',
            title: t('Staff'),
            width: 200
        }
    ];

    return (
        <MainLayout>
            <TableCustom columns={columns} dataSource={state} laoding={loading} rowKey={'_id'}/>
        </MainLayout>
    );
}

export default PurchaseOrders;