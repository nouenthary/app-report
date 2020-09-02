import React from "react";
import MainLayout from "components/layout/Mainlayout";
import {Container} from "components/utils/Container";
import {useTranslation, withTranslation} from "react-i18next";
import {Link} from 'react-router-dom';
import TableCustom from "components/Table/TableCustom";
import {message} from 'antd';
import {url} from "../../utils/base_url";

const data: any[] | undefined = [];

for (let i = 0; i < 100; i++) {
    data.push({
        _id: i,
        date: '11-11-20',
        time: '11:54:21 AM',
        amount: 12 + i,
        description: "Note...",
        importType: "Import",
        staff: 'Private'
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
    const [loading, setLoading] = React.useState(false)

    const fetchData = () => {
        setLoading(true);
        fetch(url + '/imports')
            .then(resp => {
                return resp.json();
            })
            .then(r => {
                setState(r);
                setLoading(false);
            })
            .catch(error => {
                message.error(error + '', 50);
            });
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    console.log(state);
    return (
        <Container height={100}>
            <TableCustom
                loading={loading}
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
