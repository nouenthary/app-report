import React, {useEffect, useState} from "react";
import MainLayout from "components/layout/Mainlayout";
import TableCustom from "components/Table/TableCustom";
import {useTranslation} from "react-i18next";
import {fetchApi} from "../../utils/base_url";
import {message} from "antd";

const Product = () => {
    let {t} = useTranslation();

    let columns = [
        {
            key: '_id',
            dataIndex: '_id',
            title: t('No')
        },
        {
            key: 'product_code',
            dataIndex: 'product_code',
            title: t('Product Code'),
            render: (index: any, record: any) => {
                return record.product_code.barcode
            }
        },
        {
            key: 'name',
            dataIndex: 'name',
            title: t('name'),
            isSearching: true,
            sorter: (row1: { name: string }, row2: { name: string }) => {
                return row1.name.localeCompare(row2.name)
            },
        },
        {
            key: 'category',
            dataIndex: 'category',
            title: t('Category'),
            render: (index: any, record: any) => {
                return record.category === null ? "*^^*" : record.category
            }
        },
        {
            key: 'product_type',
            dataIndex: 'product_type',
            title: t('Product Type')
        },
        {
            key: 'tax',
            dataIndex: 'tax',
            title: t('Tax'),
            render: (index: any, record: any) => {
                return record.tax.value === null ? "*^^*" : record.tax.value
            }
        },
        {
            key: 'created_by',
            dataIndex: 'created_by',
            title: t('Auditor')
        }
    ];

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchApi("/products", "GET")
            .then(r => {
                return r.json()
            })
            .then(resp => {
                setState(resp.data)
                setLoading(false);
            })
            .catch(error => {
                message.error(error + '', 50);
            });
    }, []);

    return (
        <MainLayout>
            <TableCustom columns={columns} dataSource={state} loading={loading}/>
        </MainLayout>
    )
}

export default Product;