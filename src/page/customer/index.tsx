import React from 'react';
import {fetchApi} from "utils/base_url";
import TableCustom from "components/Table/TableCustom";
import MainLayout from "components/layout/Mainlayout";

class PageCustomer extends React.Component<any, any> {

    state = {
        dataSource: [],
    }

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
            });
    }

    render() {
        const columns = [
            {
                key: '_id',
                title: 'No',
                dataIndex: '_id',
                width: 200,
            },
            {
                key: 'name',
                title: "Name",
                dataIndex: 'name',
                width: 200,
                isSearching: true,
            },
            {
                key: 'phone',
                title: "Phone",
                dataIndex: 'phone',
                sorter: (a: { phone: number; }, b: { phone: number; }) => a.phone - b.phone,
                width: 200,
            },
            {
                key: 'gender',
                title: "Gender",
                dataIndex: 'gender',
                width: 200,
            },
            {
                key: 'customer_reference_type',
                title: "Type",
                dataIndex: 'customer_reference_type',
                width: 200,
            },
            {
                key: 'staff',
                title: "Staff",
                dataIndex: 'staff',
                width: 200,
                isSearching: true
            },
        ];
        return (
            <MainLayout>
                <TableCustom
                    columns={columns}
                    dataSource={this.state.dataSource}
                    rowKey="_id"
                    sticky
                    scroll={{x: 720}}
                />
            </MainLayout>
        )
    }
}


export default PageCustomer