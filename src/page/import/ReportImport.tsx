import React from "react";
import MainLayout from "components/layout/Mainlayout";
import Faker from "faker";
import moment from "moment";
import {Container} from "components/utils/Container";
import {useTranslation, withTranslation} from "react-i18next";
import {Link} from 'react-router-dom';
import TableCustom from "components/Table/TableCustom";

export const url = 'http://localhost:3000';
const data: any[] | undefined = [];

for (let i = 0; i < 100; i++) {
    data.push({
        _id: Faker.random.number(),
        date: moment(Faker.date.future()).format('L'),
        time: moment(Faker.date.future()).format('LTS'),
        amount: Faker.commerce.price(),
        description: "Note...",
        importType: "Import",
        staff: Faker.name.firstName()
    });
}

const ReportImportTable = () => {
    let {t} = useTranslation();
    const columns = [
        {
            title: t('No'),
            dataIndex: '_id',
            width: 100,
            render: (text: React.ReactNode) => (<Link to={'/reportImportDetails/' + 24023}>{text}</Link>)
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
            title: t('Amount'),
            dataIndex: 'amount',
            width: 100,
        },
        {
            title: t('Description'),
            dataIndex: 'description',
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

    const [state, setState] = React.useState([])

    const fetchData = () => {
        fetch(url + '/imports')
            .then(resp => {
                return resp.json();
            })
            .then(r => {
                setState(r);
            });
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    console.log(state);
    return (
        <Container height={100}>
            <TableCustom
                columns={columns}
                dataSource={state ? state : data}
                rowKey="_id"
            />
        </Container>
    )
}

const ReportImport = () => {
    return (
        <MainLayout>
            <ReportImportTable/>
        </MainLayout>
    )
}

export default withTranslation()(ReportImport);
