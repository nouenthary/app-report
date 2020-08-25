import React from 'react';
import MainLayout from "components/layout/Mainlayout";
import {Table, Card} from 'antd';
import {base_url, bearer} from "base_url";
import {Container} from "components/utils/Container";
import {RowButtonPrint} from "../export/ReportExport";

const PageCustomer = () => {

    const [state, setState] = React.useState([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dataSource, setDataSource] = React.useState<any>([]);

    React.useEffect(() => {

        fetch(base_url + '/customers', {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": bearer,
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://clinic.cubetiqs.com/customers",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors"
        }).then((res) => {
            return res.json();
        }).then((r) => {
            setState(r.data);
        });
    }, []);


    for (let i = 0; i < state.length; i++) {
        dataSource.push({
            _id: state[i]['_id'],
            name: state[i]['first_name'] + state[i]['last_name'],
            phone: state[i]['phone'],
            gender: state[i]['gender'],
            customer_reference_type: state[i]['customer_reference_type'],
            staff: state[i]['staff']['name']
        })
    }

    const columns = [
        {
            key: '_id',
            title: 'No',
            dataIndex: '_id'
        },
        {
            key: 'name',
            title: "Name",
            dataIndex: 'name',
            render: (index: any, column: any) => <>{column.first_name + ' ' + column.last_name}</>
        },
        {
            key: 'phone',
            title: "Phone",
            dataIndex: 'phone'
        },
        {
            key: 'gender',
            title: "Gender",
            dataIndex: 'gender'
        },
        {
            key: 'customer_reference_type',
            title: "Type",
            dataIndex: 'customer_reference_type'
        },
        {
            key: 'staff',
            title: "Staff",
            dataIndex: 'staff',
            render: (index: any, column: any) => <>{column.staff.name}</>
        }
    ];

    return (
        <MainLayout>
            <Card>
                <RowButtonPrint columns={columns} dataSource={dataSource}/>
            </Card>
            <Container>
                <Table columns={columns} rowKey="_id" dataSource={state}/>
            </Container>
        </MainLayout>
    )
}
export default PageCustomer