import React from "react";
import MainLayout from "components/layout/Mainlayout";
import TableCustom from "components/Table/TableCustom";
import {fetchApi} from "utils/base_url";
import {message} from "antd";
import {GoodsReceive} from "models/GoodsReceive";

const columns = [
    {
        key: '_id',
        dataIndex: '_id',
        title: 'No',
    },
    {
        key: 'purchase_number',
        dataIndex: 'purchase_number',
        title: 'Purchase Number',
    },
    {
        key: 'goods_receive_number',
        dataIndex: 'goods_receive_number',
        title: 'GR Number'
    },
    {
        key: 'invoice_number',
        dataIndex: 'invoice_number',
        title: 'Invoice Number'
    },
    {
        key: 'date',
        dataIndex: 'date',
        title: 'Date'
    },
    {
        key: 'amount',
        dataIndex: 'amount',
        title: 'Amount'
    },
    {
        key: 'credit',
        dataIndex: 'credit',
        title: 'Credit'
    },
    {
        key: 'supplier',
        dataIndex: 'supplier',
        title: 'Supplier'
    },
    {
        key: 'phone',
        dataIndex: 'phone',
        title: 'Phone'
    },
    {
        key: 'created_by',
        dataIndex: 'created_by',
        title: 'Staff'
    }
];


const GoodReceived = () => {
    const [state, setState] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(false);

    const fetchDateApi = () => {
        setLoading(true)
        fetchApi("/goods-receives", "GET")
            .then(r => {
                return r.json();
            })
            .then(resp => {
                const goodsReceived: GoodsReceive[] = [];
                resp.data.map((goods: any) => {
                    return goodsReceived.push({
                        _id: goods._id,
                        goods_receive_number: goods.goods_receive_number ? goods.goods_receive_number : 'N/A',
                        purchase_number: goods.purchase_number ? goods.purchase_number : 'N/A',
                        invoice_number: goods.invoice_number ? goods.invoice_number : 'N/A',
                        date: goods.date,
                        supplier: goods.purchase.supplier.name ? goods.purchase.supplier.name : 'N/A',
                        phone: goods.purchase.supplier.phone ? goods.purchase.supplier.phone : 'N/A',
                        credit: goods.credit.normalized,
                        amount: goods.amount.normalized,
                        branch: goods.branch.name,
                        created_by: goods.created_by
                    })
                });
                setState(goodsReceived);
                setLoading(false);
            })
            .catch(error => {
                message.error(error + '', 50);
            });
    }

    React.useEffect(() => {
        fetchDateApi()
    }, []);

    return (
        <MainLayout>
            <TableCustom columns={columns} loading={loading} dataSource={state} rowKey={'_id'}/>
        </MainLayout>
    )
}

export default GoodReceived;