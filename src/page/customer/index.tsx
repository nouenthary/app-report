import React from 'react';
import TableCustom from "components/Table/TableCustom";
import MainLayout from "components/layout/Mainlayout";
import {withTranslation} from "react-i18next";
import {fetchApi} from "../../utils/base_url";
import {message} from "antd";

export const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
};

class PageCustomer extends React.Component<any, any> {

    state = {
        dataSource: [],
        columns: []
    };

    componentDidMount(): void {
        fetchApi('/customers', 'GET')
            .then((resp) => {
                return resp.json()
            })
            .then((r) => {
                this.setState({customers: r.data});

                let state: string | any[] = [];

                for (let i = 0; i < r.data.length; i++) {
                    state.push({
                        _id: r.data[i]['_id'],
                        name: r.data[i]['first_name'] + r.data[i]['last_name'],
                        phone: r.data[i]['phone'],
                        gender: r.data[i]['gender'],
                        customer_reference_type: r.data[i]['customer_reference_type'],
                        staff: r.data[i]['staff']['name']
                    })
                }
                this.setState({dataSource: state});
            }).catch((error) => message.error(error + '', 50));
    }

    render() {
        let {t} = this.props;
        const columns = [
            {
                key: '_id',
                title: t('No'),
                dataIndex: '_id',
                width: 200,
                visible: true
            },
            {
                key: 'name',
                title: t("Name"),
                dataIndex: 'name',
                width: 200,
                sorter: (row1: { name: string }, row2: { name: string }) => {
                    return row1.name.localeCompare(row2.name)
                },
                isSearching: true,
            },
            {
                key: 'phone',
                title: t("Phone"),
                dataIndex: 'phone',
                sorter: (a: { phone: number; }, b: { phone: number; }) => a.phone - b.phone,
                width: 200,
            },
            {
                key: 'gender',
                title: t("Gender"),
                dataIndex: 'gender',
                width: 200,
                sorter: (row1: { gender: string }, row2: { gender: string }) => {
                    return row1.gender.localeCompare(row2.gender)
                },
            },
            {
                key: 'customer_reference_type',
                title: t("Type"),
                dataIndex: 'customer_reference_type',
                width: 200,
            },
            {
                key: 'staff',
                title: t("Staff"),
                dataIndex: 'staff',
                width: 200,
                isSearching: true
            },
        ];

        return (
            <MainLayout>
                {columns &&
                <TableCustom
                    columns={columns}
                    dataSource={this.state.dataSource}
                    rowKey="_id"
                />}
            </MainLayout>
        )
    }
}


export default withTranslation()(PageCustomer)