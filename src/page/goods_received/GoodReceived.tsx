import React from "react";
import MainLayout from "components/layout/Mainlayout";
import TableCustom from "components/Table/TableCustom";
import {fetchApi} from "utils/base_url";
import {message} from "antd";

const columns = [
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
        dataIndex: 'data',
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
        key: 'staff',
        dataIndex: 'staff',
        title: 'Staff'
    }
];

interface GoodReceivedType {
    purchase_number?: string;
    goods_receive_number?: string;
    invoice_number?: string;
    date?: string;
    amount?: string;
    credit?: string;
    supplier?: string;
    phone?: string;
    staff?: string;
}

const GoodReceived = () => {
    const [state, setState] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const fetchDateApi = () => {
        setLoading(true)
        fetchApi("/goods-receives", "GET")
            .then(r => {
                return r.json()
            })
            .then(resp => {
                setState(resp.data)
                setLoading(false);
                console.log(resp.data[0])
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
            <TableCustom columns={columns} loading={loading} dataSoruce={state} rowKey={'_id'}/>
        </MainLayout>
    )
}

export default GoodReceived;