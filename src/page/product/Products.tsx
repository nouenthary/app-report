import React, {useEffect, useState} from "react";
import MainLayout from "components/layout/Mainlayout";
import TableCustom from "components/Table/TableCustom";
import {useTranslation} from "react-i18next";
import {fetchApi} from "../../utils/base_url";
import {message} from "antd";
import {Product} from "models/Product";

const Products = () => {
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
            title: t('Product Code')
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
        },
        {
            key: 'created_by',
            dataIndex: 'created_by',
            title: t('Auditor')
        }
    ];

    const [state, setState] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetchApi("/products", "GET")
            .then(r => {
                return r.json();
            })
            .then(resp => {
                const products: Product[] = [];
                resp.data.map((product: any) => {
                    return products.push({
                        _id: product._id,
                        name: product.name,
                        category: product.category ? product.category : 'N/A',
                        product_code: product.product_code.barcode,
                        product_type: product.product_type,
                        tax: product.tax.value,
                        created_by: product.created_by
                    })
                });
                setState(products)
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                message.error(error + '', 50);
            });
    }, []);
    return (
        <MainLayout>
            <TableCustom columns={columns} dataSource={state} loading={loading}/>
        </MainLayout>
    )
}

export default Products;